import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-second-parent-component',
  templateUrl: './second-parent-component.component.html',
  styleUrls: ['./second-parent-component.component.css']
})
export class SecondParentComponentComponent implements OnInit {
  navTab="performance | examen.b"
  showStat : boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  openStat(){
    this.showStat = !this.showStat
  }
}
