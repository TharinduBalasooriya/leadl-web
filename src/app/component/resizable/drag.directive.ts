import { Directive, ElementRef, Output, EventEmitter, HostBinding, Input, Inject } from '@angular/core';
import {  } from '@angular/platform-browser';
import {DOCUMENT} from "@angular/common";


@Directive({
  selector: '[drag-handle]',
  providers: [ { provide: DOCUMENT, useValue: document } ],
})
export class DragDirective {

  @Output() onDragStart = new EventEmitter();
  @Output() onDrag = new EventEmitter();
  @Output() onDragEnd = new EventEmitter();

  private dragging = false;

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
