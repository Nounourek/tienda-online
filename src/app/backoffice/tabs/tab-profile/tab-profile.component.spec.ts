import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabProfileComponent } from './tab-profile.component';

describe('TabProfileComponent', () => {
  let component: TabProfileComponent;
  let fixture: ComponentFixture<TabProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
