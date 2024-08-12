import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDiscreptionComponent } from './footer-discreption.component';

describe('FooterDiscreptionComponent', () => {
  let component: FooterDiscreptionComponent;
  let fixture: ComponentFixture<FooterDiscreptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterDiscreptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterDiscreptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
