import { Component, Input, OnInit } from '@angular/core';
import { LDALDebugModel } from 'src/app/models/result.model';

@Component({
  selector: 'app-variable-values',
  templateUrl: './variable-values.component.html',
  styleUrls: ['./variable-values.component.css']
})
export class VariableValuesComponent implements OnInit {

  constructor() { }
  @Input() varaible:LDALDebugModel = {
    dataType:'',
    details:'',
    name:''
  }
  ngOnInit(): void {
  }

}
