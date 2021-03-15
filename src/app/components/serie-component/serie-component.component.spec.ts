import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieComponentComponent } from './serie-component.component';

describe('SerieComponentComponent', () => {
  let component: SerieComponentComponent;
  let fixture: ComponentFixture<SerieComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
