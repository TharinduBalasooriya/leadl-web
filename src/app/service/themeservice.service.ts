import {BehaviorSubject, Observable} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeserviceService {

  get theme(): string {
    return <string>document.documentElement.getAttribute('theme');
  }

  set theme(name: string ) {
    document.documentElement.setAttribute('theme', name);
  }
  constructor() { }
}
