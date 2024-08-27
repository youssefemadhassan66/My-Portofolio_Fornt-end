import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutprofessionalBackgroundComponent } from './aboutprofessional-background.component';

describe('AboutprofessionalBackgroundComponent', () => {
  let component: AboutprofessionalBackgroundComponent;
  let fixture: ComponentFixture<AboutprofessionalBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutprofessionalBackgroundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutprofessionalBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
