import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraticComponent } from './quadratic.component';

describe('QuadraticComponent', () => {
  let component: QuadraticComponent;
  let fixture: ComponentFixture<QuadraticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuadraticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuadraticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
