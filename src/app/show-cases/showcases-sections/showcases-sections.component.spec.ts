import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasesSectionsComponent } from './showcases-sections.component';

describe('ShowcasesSectionsComponent', () => {
  let component: ShowcasesSectionsComponent;
  let fixture: ComponentFixture<ShowcasesSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcasesSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcasesSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
