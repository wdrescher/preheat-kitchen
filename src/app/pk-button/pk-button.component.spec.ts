import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkButtonComponent as PKButtonComponent } from './pk-button.component';

describe('PkButtonComponent', () => {
  let component: PKButtonComponent;
  let fixture: ComponentFixture<PKButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PKButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PKButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
