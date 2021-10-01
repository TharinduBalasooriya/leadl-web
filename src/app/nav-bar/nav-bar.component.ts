import {Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  collapsed=true;
  customCollapse = false;
  @Output() collapseEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  onCollapse():void{
    if(this.customCollapse){
      this.customCollapse = false;
      this.collapseEvent.emit(false);
    }else{
      this.customCollapse = true;
      this.collapseEvent.emit(true);
    }
  }

}
