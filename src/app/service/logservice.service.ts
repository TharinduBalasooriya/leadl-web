import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LogModel} from "../models/log.model";
import {Observable} from "rxjs";
import {Auth} from "aws-amplify";
import { AuthService } from './auth.service';
import {ContentModel} from "../models/content.model";
import { ResultModel } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor(private http: HttpClient,private authService:AuthService) { }

  // getAllLogs(){
  //
  //   this.http.get<LogModel[]>('https://leadl-backend.herokuapp.com/api/logs/isiniD/').subscribe(data => {
  //       console.log(data)
  //   })
  //
  //
  //
  // }

  getAllLogs(username :string): Observable<LogModel[]>{





    return this.http.get<LogModel[]>('https://leadl-backend.herokuapp.com/api/logs/'+username);
  }

  getProjects():Observable<string[]>{

    console.log('Get Projects called')
    return this.http.get<string[]>('https://leadl-backend.herokuapp.com/api/projects/'+localStorage.getItem('currentUser')+"/");
  }

  // getProjects(username :string){
  //   this.http.get<string[]>('https://leadl-backend.herokuapp.com/api/projects/'+username).subscribe(data=>{
  //     console.log(data)
  //   });
  // }

   getContent(fileId :any):Observable<ContentModel>{

     console.log('get Content called')
     return this.http.get<ContentModel>('https://leadl-backend.herokuapp.com/api/v2/content/'+fileId +"/")

   }

   getLogsByProject(projectName:any):Observable<LogModel[]>{

     //return this.http.get<LogModel[]>('https://leadl-backend.herokuapp.com/logapi/isini/AgentLogs');

     return this.http.get<LogModel[]>('https://leadl-backend.herokuapp.com/api/logs/getByProject/'+projectName);

   }

   activateLogFile(logFileid :any):Observable<string>{
     return this.http.get<string>('https://leadl-backend.herokuapp.com/api/logs/activateLog/' + logFileid);
   }


   executeLdelScript(logFileId :any):Observable<ResultModel>{

    return this.http.get<ResultModel>('https://leadl-backend.herokuapp.com/api/executeLDEL/'+logFileId);
   }

   executeLdelScriptGetJSON(logFileId :any):Observable<ResultModel>{


    return this.http.get<ResultModel>('https://leadl-backend.herokuapp.com/api/executeGetJSON/'+logFileId);


   }






}
