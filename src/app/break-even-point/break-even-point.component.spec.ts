import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakEvenPointComponent } from './break-even-point.component';

describe('BreakEvenPointComponent', () => {
  let component: BreakEvenPointComponent;
  let fixture: ComponentFixture<BreakEvenPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakEvenPointComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreakEvenPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
