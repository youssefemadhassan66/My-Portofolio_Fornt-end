import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasesDashboardComponent } from './showcases-dashboard.component';

describe('ShowcasesDashboardComponent', () => {
  let component: ShowcasesDashboardComponent;
  let fixture: ComponentFixture<ShowcasesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcasesDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcasesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
