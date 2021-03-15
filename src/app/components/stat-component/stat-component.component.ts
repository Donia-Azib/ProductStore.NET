import { Component, Input, OnInit } from '@angular/core';
import { faTasks,faPlusCircle,faSortDown,faSortUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stat-component',
  templateUrl: './stat-component.component.html',
  styleUrls: ['./stat-component.component.css']
})
export class StatComponentComponent implements OnInit {
  // @Input() iconName:IconDefinition=faTasks;
  // @Input() showIconAdd:boolean = false;

  faPlusCircle=faPlusCircle;
  faTasks = faTasks
  faSortDown=faSortDown
  faSortUp=faSortUp

  constructor() { }

  ngOnInit(): void {
  }

}
