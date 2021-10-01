import { Component, Input, OnInit } from '@angular/core';
import { LDALDebugModel } from 'src/app/models/result.model';

@Component({
  selector: 'app-nodevariable-values',
  templateUrl: './nodevariable-values.component.html',
  styleUrls: ['./nodevariable-values.component.css']
})
export class NodevariableValuesComponent implements OnInit {

  constructor() { }

  @Input() varaible:any
  ngOnInit(): void {
  }

}
