import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasesIntridcutionComponent } from './showcases-intridcution.component';

describe('ShowcasesIntridcutionComponent', () => {
  let component: ShowcasesIntridcutionComponent;
  let fixture: ComponentFixture<ShowcasesIntridcutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcasesIntridcutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcasesIntridcutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
