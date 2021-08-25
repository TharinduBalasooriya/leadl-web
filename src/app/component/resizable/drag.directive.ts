import { Directive, ElementRef, Output, EventEmitter, HostBinding, Input, Inject } from '@angular/core';
import {  } from '@angular/platform-browser';
import {DOCUMENT} from "@angular/common";


@Directive({
  selector: '[drag-handle]',
  providers: [ { provide: DOCUMENT, useValue: document } ],
})
//@ts-ignore
export class DragDirective {

  //@ts-ignore
  @Output() onDragStart = new EventEmitter();
  //@ts-ignore
  @Output() onDrag = new EventEmitter();
  //@ts-ignore
  @Output() onDragEnd = new EventEmitter();

  private dragging = false;
//@ts-ignore
  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    let el = this.elementRef.nativeElement;
    // @ts-ignore
    el.addEventListener('mousedown', (event) => {
      if (event.which === 1) {
        this.dragging = true;
        this.onDragStart.emit({ originalEvent: event });
      }
    }, false);


    // @ts-ignore
    this.document.addEventListener('mouseup', (event) => {
      if(this.dragging) {
        this.onDragEnd.emit({ originalEvent: event });
      }

      this.dragging = false;
    }, false);

    // @ts-ignore
    this.document.addEventListener('mousemove', (event) => {
      if(this.dragging) {
        this.onDrag.emit({ originalEvent: event });
      }
    }, false);
  }
}
