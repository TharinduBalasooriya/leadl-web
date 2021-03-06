import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LogModel} from "../models/log.model";
import {Observable} from "rxjs";
import {Auth} from "aws-amplify";
import { AuthService } from './auth.service';
import {ContentModel} from "../models/content.model";
import { ResultModel } from '../models/result.model';
import { LDALResultModel } from '../models/result.model';
import { LDALscriptModel } from '../models/ldalScript.model';
import { LDALRequst } from '../models/request.model';


@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor(private http: HttpClient,private authService:AuthService) { }



  getAllLogs(username :string): Observable<LogModel[]>{





    return this.http.get<LogModel[]>('https://leadl-backend.herokuapp.com/api/logs/'+username);
  }

  getProjects():Observable<string[]>{

    console.log('Get Projects called')
    return this.http.get<string[]>('https://leadl-backend.herokuapp.com/api/projects/'+localStorage.getItem('currentUser')+"/");
  }



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

   executeLdalScript(scriptId :any):Observable<LDALResultModel>{

    return this.http.get<LDALResultModel>('https://leadl-backend.herokuapp.com/api/executeLDAL/'+scriptId);
   }

   debugLdalScript(scriptBody :any):Observable<any>{

    return this.http.post<any>('https://leadl-backend.herokuapp.com/api/debugLDAL/',scriptBody);
   }

   getScriptById(scriptId :any):Observable<LDALscriptModel>{

    return this.http.get<LDALscriptModel>('https://leadl-backend.herokuapp.com/api/getscript/'+scriptId)
   }


   updateLDALscript(script :LDALscriptModel ): Observable<LDALResultModel> {
    return this.http.put<LDALResultModel>(
      'https://leadl-backend.herokuapp.com/api/script/update',script
    );
  }

}
