import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGoalsComponent } from './about-goals.component';

describe('AboutGoalsComponent', () => {
  let component: AboutGoalsComponent;
  let fixture: ComponentFixture<AboutGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutGoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
