import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectileMotionComponent } from './projectile-motion.component';

describe('ProjectileMotionComponent', () => {
  let component: ProjectileMotionComponent;
  let fixture: ComponentFixture<ProjectileMotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectileMotionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectileMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
