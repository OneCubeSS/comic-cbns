import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtseriesComponent } from './edtseries.component';

describe('EdtseriesComponent', () => {
  let component: EdtseriesComponent;
  let fixture: ComponentFixture<EdtseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
