import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabShortcutsComponent } from './tab-shortcuts.component';

describe('TabShortcutsComponent', () => {
  let component: TabShortcutsComponent;
  let fixture: ComponentFixture<TabShortcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabShortcutsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
