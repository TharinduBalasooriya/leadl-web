import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LDALscriptModel} from '../models/ldalScript.model';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class LDALScriptService {
  accessToken?: string;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getLDALScripts(projectId :any): Observable<LDALscriptModel[]> {
    return this.http.get<LDALscriptModel[]>(
      'https://leadl-backend.herokuapp.com/api/script/' +projectId
    );
  }


  createScript(script:LDALscriptModel ): Observable<LDALscriptModel> {
    return this.http.post<LDALscriptModel>(
      'https://leadl-backend.herokuapp.com/api/script',
      script,
      httpOptions
    );
  }




}
