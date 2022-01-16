import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrUrlComponent } from './qr-url.component';

describe('QrUrlComponent', () => {
  let component: QrUrlComponent;
  let fixture: ComponentFixture<QrUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
