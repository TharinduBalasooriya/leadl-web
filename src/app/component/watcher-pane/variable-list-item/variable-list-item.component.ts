import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable-list-item',
  templateUrl: './variable-list-item.component.html',
  styleUrls: ['./variable-list-item.component.css']
})
export class VariableListItemComponent implements OnInit {

  constructor() { }
 @Input() variable_name='';
  ngOnInit(): void {
  }

}
