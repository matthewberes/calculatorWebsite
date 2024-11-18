import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerivativeComponent } from './derivative.component';

describe('DerivativeComponent', () => {
  let component: DerivativeComponent;
  let fixture: ComponentFixture<DerivativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerivativeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DerivativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
