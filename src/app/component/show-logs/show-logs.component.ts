import { Component, OnInit } from '@angular/core';
import { LogserviceService } from '../../service/logservice.service';
import { LogModel } from '../../models/log.model';
import { Auth } from 'aws-amplify';
import { ContentModel } from '../../models/content.model';
import { SocketService } from 'src/app/service/socket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketMsg } from 'src/app/models/socketmessages.model';

@Component({
  selector: 'app-show-logs',
  templateUrl: './show-logs.component.html',
  styleUrls: ['./show-logs.component.css'],
})
export class ShowLogsComponent implements OnInit {
  logs: LogModel[] = [];
  distinctLogs: LogModel[] = [];
  projects: string[] = [];
  logContent?: ContentModel;
  logString: string = '';
  fileId?:string | null

  constructor(
    private logService: LogserviceService,
    private route: ActivatedRoute,
    private socketService: SocketService,
    private router: Router
  ) {
    Auth.currentAuthenticatedUser()
      .then()
      .catch((err) => {
        this.router.navigate(['login']);
      });
  }

  ngOnInit(): void {
    this.readContent();
    this.fileId = this.route.snapshot.paramMap.get('id');
    this.socketService.createSocket(this.fileId);

    this.socketService.getEventListener().subscribe((event) => {
      if (event.type == 'close') {
        console.log('Socket connection has been closed');
      }

      if (event.type == 'open') {
        console.log('Socket Established');
      }

      if (event.type == 'message') {
        console.log(event.data);
        let msg :SocketMsg = event.data
        console.log(msg.recipient)


        if(msg.recipient != undefined && msg.content != undefined && msg.recipient === this.fileId){
          this.logString = this.logString + msg.content;
        }

      }
    });
  }
  ngOnDestroy(): void {
    this.socketService.close();
  }

  getLogs(): void {
    Auth.currentUserInfo().then((result) => {
      let data = result;

      this.logService
        .getAllLogs(data.attributes.given_name)
        .subscribe((logs) => (this.logs = logs));
    });
  }

  getProjects(): void {
    Auth.currentUserInfo().then((result) => {
      let data = result;

      this.logService
        .getProjects()
        .subscribe((project) => (this.projects = project));
    });
  }

  readContent(): void {
    const fileId = this.route.snapshot.paramMap.get('id');

    this.logService.getContent(fileId).subscribe((value) => {
      this.logString = value.content;
    });
  }
}
