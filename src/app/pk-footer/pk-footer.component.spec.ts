import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkFooterComponent } from './pk-footer.component';

describe('PkFooterComponent', () => {
  let component: PkFooterComponent;
  let fixture: ComponentFixture<PkFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
