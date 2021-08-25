import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  Inject,
  ViewEncapsulation,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { DragDirective } from './drag.directive';

@Component({
  selector: 'app-resizable',
  templateUrl: './resizable.component.html',
  styleUrls: ['./resizable.component.css'],
  providers: [ { provide: Window, useValue: window } ],
  encapsulation: ViewEncapsulation.None,

})
export class ResizableComponent  {

  @HostBinding('class.resizable') true : any;
  @HostBinding('class.no-transition') noTransition = false;
  @HostBinding('style.width') width : any;
  @HostBinding('style.height') height : any;
  // @ts-ignore
  @HostBinding('style.flex-basis') flexBasis;

  @Input() directions: any;
  @Input() rFlex = false;

  @Output() resizeStart = new EventEmitter();
  @Output() resizing = new EventEmitter();
  @Output() resizeEnd = new EventEmitter();

  // @ts-ignore
  public regionElement;
  public nativeElement;

  // @ts-ignore
  public window;

  public style;

  // @ts-ignore
  public w;
  // @ts-ignore
  public h;

  public vx = 1;
  public vy = 1;

  public start : any;

  public dragDir : any;

  public axis : any;

  public info = {};

  // @ts-ignore
  private flexBasis;

  // @ts-ignore
  constructor(private regionElement: ElementRef, @Inject(Window) private window: Window) {
    // @ts-ignore
    this.nativeElement = this.regionElement.nativeElement;
    // @ts-ignore
    this.style = this.window.getComputedStyle(this.nativeElement, null);
  }

  ngOnInit() {
    this.flexBasis = 'flexBasis' in this.nativeElement.style ? 'flexBasis' :
      'webkitFlexBasis' in this.nativeElement.style ? 'webkitFlexBasis' :
        'msFlexPreferredSize' in this.nativeElement.style ? 'msFlexPreferredSize' : 'flexBasis';
  }

  public updateInfo(e: any) {
    // @ts-ignore
    this.info['width'] = false; this.info['height'] = false;
    if(this.axis === 'x') {
      // @ts-ignore
      this.info['width'] = parseInt(this.nativeElement.style[this.rFlex ? this.flexBasis : 'width']);
    } else {
      // @ts-ignore
      this.info['height'] = parseInt(this.nativeElement.style[this.rFlex ? this.flexBasis : 'height']);
    }
    // @ts-ignore
    this.info['id'] = this.nativeElement.id;
    // @ts-ignore
    this.info['evt'] = e;
  };

  public dragStart(e: { originalEvent: any; }, direction: any) {
    let mouseEvent = e.originalEvent;

    this.dragDir = direction;
    this.axis = (this.dragDir === 'left' || this.dragDir === 'right') ? 'x' : 'y';
    this.start = (this.axis === 'x' ? mouseEvent.clientX : mouseEvent.clientY);
    this.w = parseInt(this.style.getPropertyValue('width'));
    this.h = parseInt(this.style.getPropertyValue('height'));

    this.resizeStart.emit({ info: this.info });

    //prevent transition while dragging
    this.noTransition = true;
  }

  public dragEnd(e: { originalEvent: any; }) {
    let mouseEvent = e.originalEvent;

    this.updateInfo(mouseEvent);
    this.resizeEnd.emit({ info: this.info });
    this.noTransition = false;
  }

  public dragging(e: { originalEvent: any; }) {
    let mouseEvent = e.originalEvent;
    let prop, offset = (this.axis === 'x') ? this.start - mouseEvent.clientX : this.start - mouseEvent.clientY;

    var operand = 1;

    // @ts-ignore
    // @ts-ignore
    switch(this.dragDir) {
      //@ts-ignore
      case 'top':
        operand = -1;
        //@ts-ignore
      case 'bottom':
        let height = (this.h - offset * this.vy * operand) + 'px';
        if(this.rFlex) {
          this.flexBasis = height;
        } else {
          this.height = height;
        }

        break;
        //@ts-ignore
      case 'left':
        operand = -1;
        //@ts-ignore
      case 'right':
        let width = (this.w - offset * this.vx * operand) + 'px';
        if(this.rFlex) {
          this.flexBasis = width;
        } else {
          this.width = width;
        }

        break;

    }
    this.updateInfo(mouseEvent);
    this.resizing.emit({ info: this.info });
  }

}
