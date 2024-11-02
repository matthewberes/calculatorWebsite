import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedProbabilityComponent } from './combined-probability.component';

describe('CombinedProbabilityComponent', () => {
  let component: CombinedProbabilityComponent;
  let fixture: ComponentFixture<CombinedProbabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinedProbabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombinedProbabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
