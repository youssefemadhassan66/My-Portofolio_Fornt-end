import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasesContactComponent } from './showcases-contact.component';

describe('ShowcasesContactComponent', () => {
  let component: ShowcasesContactComponent;
  let fixture: ComponentFixture<ShowcasesContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcasesContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcasesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
