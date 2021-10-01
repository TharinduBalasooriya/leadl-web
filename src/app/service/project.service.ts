import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';
import { getTokenSourceMapRange } from 'typescript';
import { debugResult, projectModel } from '../models/project.model';
import { AuthService } from './auth.service';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  accessToken?: string;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getProjects(): Observable<projectModel[]> {
    return this.http.get<projectModel[]>(
      'https://leadl-backend.herokuapp.com/api/projectV2/' +
        localStorage.getItem('currentUser')
    );
  }

  createProject(project: projectModel): Observable<projectModel> {
    return this.http.post<projectModel>(
      'https://leadl-backend.herokuapp.com/api/project',
      project,
      httpOptions
    );
  }
  createDebugProject(val: any): Observable<string> {
    return this.http.post<string>(
      'https://leadl-backend.herokuapp.com/api/debug_save',
      val
    );
  }

  executeDebugProject(projectID: any): Observable<debugResult> {
    return this.http.get<debugResult>(
      'https://leadl-backend.herokuapp.com/api/debug/' + projectID
    );
  }

  updateProject(project: projectModel): Observable<projectModel> {
    return this.http.put<projectModel>(
      'https://leadl-backend.herokuapp.com/api/project/update',
      project
    );
  }

  getProjectDetails(projectId: string | null): Observable<projectModel> {
    return this.http.get<projectModel>(
      'https://leadl-backend.herokuapp.com/api/project/' + projectId
    );
  }
}
