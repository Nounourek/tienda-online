import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallChartsComponent } from './small-charts.component';

describe('SmallChartsComponent', () => {
  let component: SmallChartsComponent;
  let fixture: ComponentFixture<SmallChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallChartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
