import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkInputBoxComponent } from './pk-input-box.component';

describe('PkInputBoxComponent', () => {
  let component: PkInputBoxComponent;
  let fixture: ComponentFixture<PkInputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkInputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
