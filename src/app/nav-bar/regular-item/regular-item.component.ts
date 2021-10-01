import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-regular-item',
  templateUrl: './regular-item.component.html',
  styleUrls: ['./regular-item.component.css']
})
export class RegularItemComponent implements OnInit {

  constructor() { }

  @Input()Name :string =''
  @Input()routerLink:string=''
  @Input()IconName:string='house-fill'
  ngOnInit(): void {
  }

}
