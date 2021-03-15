import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faCheck,faCheckCircle, faCheckDouble, faCheckSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-epreuvelist-component',
  templateUrl: './epreuvelist-component.component.html',
  styleUrls: ['./epreuvelist-component.component.css'],
})
export class EpreuvelistComponentComponent implements OnInit {
  @Input() tab:any[];
  @Input() nameTab:string;
  @Input() showDate:boolean=false;
  @Input() serie:boolean=false;
  @Input() fac:boolean=false

  @Output() event = new EventEmitter();

  public active:number = -1 ;

  faCheckCircle = faCheckCircle;

  constructor() {}

  ngOnInit(): void {}

  sendEvent(e:any,i:number)
  {
    console.log('send event');
    console.log(e);
    this.event.emit(this.nameTab);
    this.active = i;
    
  }
}
