import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtcaterogyComponent } from './edtcaterogy.component';

describe('EdtcaterogyComponent', () => {
  let component: EdtcaterogyComponent;
  let fixture: ComponentFixture<EdtcaterogyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtcaterogyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtcaterogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
