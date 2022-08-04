import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPlanningComponent } from './consulter-planning.component';

describe('ConsulterPlanningComponent', () => {
  let component: ConsulterPlanningComponent;
  let fixture: ComponentFixture<ConsulterPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPlanningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
