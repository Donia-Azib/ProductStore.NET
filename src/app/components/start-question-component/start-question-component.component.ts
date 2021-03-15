import { Component, OnInit } from '@angular/core';
import { faClock,faTasks,faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-start-question-component',
  templateUrl: './start-question-component.component.html',
  styleUrls: ['./start-question-component.component.css']
})
export class StartQuestionComponentComponent implements OnInit {

  faClock = faClock
  faTasks = faTasks
  faChevronCircleRight = faChevronCircleRight
  constructor() { }

  ngOnInit(): void {
  }

}
