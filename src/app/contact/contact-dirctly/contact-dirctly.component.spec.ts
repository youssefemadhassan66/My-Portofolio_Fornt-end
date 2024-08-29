import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDirctlyComponent } from './contact-dirctly.component';

describe('ContactDirctlyComponent', () => {
  let component: ContactDirctlyComponent;
  let fixture: ComponentFixture<ContactDirctlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactDirctlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDirctlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
