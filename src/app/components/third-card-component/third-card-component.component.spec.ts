import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCardComponentComponent } from './third-card-component.component';

describe('ThirdCardComponentComponent', () => {
  let component: ThirdCardComponentComponent;
  let fixture: ComponentFixture<ThirdCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
