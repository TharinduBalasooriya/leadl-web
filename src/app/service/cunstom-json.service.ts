import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { customJsonpModel} from '../models/customJson.model';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class CunstomJsonService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  createJson(json:customJsonpModel): Observable<customJsonpModel> {
    return this.http.post<customJsonpModel>(
      'https://leadl-backend.herokuapp.com/api/customJson',
      json,
      httpOptions
    );
  }

  getCustomJsons(projectId :any): Observable<customJsonpModel[]> {
    return this.http.get<customJsonpModel[]>(
      'https://leadl-backend.herokuapp.com/api/customJson/' +projectId
    );
  }

  getCustomJsonsbyId(jsonId :any):Observable<customJsonpModel>{

    return this.http.get<customJsonpModel>('https://leadl-backend.herokuapp.com/api/getcustomJson/'+jsonId)
   }


}
