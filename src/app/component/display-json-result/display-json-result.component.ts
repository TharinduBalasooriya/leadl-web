import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { get } from 'http';
import { LogserviceService } from 'src/app/service/logservice.service';

@Component({
  selector: 'app-display-json-result',
  templateUrl: './display-json-result.component.html',
  styleUrls: ['./display-json-result.component.css'],
})
export class DisplayJsonResultComponent implements OnInit {
  fileId = this.route.snapshot.paramMap.get('id');
  fileString: string = '';
  projectId: any;
  JsonString: String = '';
  data: String = '';

  constructor(
    private route: ActivatedRoute,
    private logService: LogserviceService
  ) {}

  ngOnInit(): void {
    this.readContent();
  }

  readContent(): void {
    const fileId = this.route.snapshot.paramMap.get('id');
    console.log(fileId);

    this.logService.executeLdelScriptGetJSON(fileId).subscribe((value) => {
      this.fileString = value.result;
      this.JsonString = JSON.parse(this.fileString);
      this.data = this.JsonString;
      console.log(value);
    });
  }

  get code() {
    return JSON.stringify(this.data, null, 2);
  }

  set code(v) {
    try {
      this.data = JSON.parse(v);
    } catch (e) {
      console.log('error occored while you were typing the JSON');
    }
  }
}
