import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpreuvelistComponentComponent } from './epreuvelist-component.component';

describe('EpreuvelistComponentComponent', () => {
  let component: EpreuvelistComponentComponent;
  let fixture: ComponentFixture<EpreuvelistComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpreuvelistComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpreuvelistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
