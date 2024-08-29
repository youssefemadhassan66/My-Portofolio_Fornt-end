import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIntroductionFormComponent } from './contact-introduction-form.component';

describe('ContactIntroductionFormComponent', () => {
  let component: ContactIntroductionFormComponent;
  let fixture: ComponentFixture<ContactIntroductionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactIntroductionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactIntroductionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
