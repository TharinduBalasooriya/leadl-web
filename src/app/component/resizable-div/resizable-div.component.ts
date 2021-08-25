import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';


@Component({
  selector: 'app-resizable-div',
  templateUrl: './resizable-div.component.html',
  styleUrls: ['./resizable-div.component.css']
})
export class ResizableDivComponent implements OnInit {
public style={};
  constructor() { }
  onResizeEnd(event: ResizeEvent): void {
    console.log('Element was resized', event);
    this.style = {
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
  ngOnInit(): void {
  }

}
