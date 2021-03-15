import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartQuestionComponentComponent } from './start-question-component.component';

describe('StartQuestionComponentComponent', () => {
  let component: StartQuestionComponentComponent;
  let fixture: ComponentFixture<StartQuestionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartQuestionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartQuestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
