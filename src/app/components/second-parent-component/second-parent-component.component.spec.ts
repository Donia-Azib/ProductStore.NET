import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondParentComponentComponent } from './second-parent-component.component';

describe('SecondParentComponentComponent', () => {
  let component: SecondParentComponentComponent;
  let fixture: ComponentFixture<SecondParentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondParentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
