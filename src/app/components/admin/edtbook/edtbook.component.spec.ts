import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtbookComponent } from './edtbook.component';

describe('EdtbookComponent', () => {
  let component: EdtbookComponent;
  let fixture: ComponentFixture<EdtbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
