import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCardComponentComponent } from './second-card-component.component';

describe('SecondCardComponentComponent', () => {
  let component: SecondCardComponentComponent;
  let fixture: ComponentFixture<SecondCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
