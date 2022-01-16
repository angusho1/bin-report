import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMapComponent } from './report-map.component';

describe('ReportMapComponent', () => {
  let component: ReportMapComponent;
  let fixture: ComponentFixture<ReportMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
