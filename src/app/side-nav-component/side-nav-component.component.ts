import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-component',
  templateUrl: './side-nav-component.component.html',
  styleUrls: ['./side-nav-component.component.css']
})
export class SideNavComponentComponent implements OnInit {

  constructor() { }
  
  @Input() Name?:String;

  ngOnInit(): void {
  }

}
