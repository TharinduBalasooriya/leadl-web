import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-list-item',
  templateUrl: './side-list-item.component.html',
  styleUrls: ['./side-list-item.component.css']
})
export class SideListItemComponent implements OnInit {

  constructor() { }

  @Input() Name?:String;

  ngOnInit(): void {
  }

}
