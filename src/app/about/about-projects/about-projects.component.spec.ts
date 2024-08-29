import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactProjectsComponent } from './Contact-projects.component';

describe('ContactProjectsComponent', () => {
  let component: ContactProjectsComponent;
  let fixture: ComponentFixture<ContactProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
