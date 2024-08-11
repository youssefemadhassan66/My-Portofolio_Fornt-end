import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGallaryComponent } from './home-gallary.component';

describe('HomeGallaryComponent', () => {
  let component: HomeGallaryComponent;
  let fixture: ComponentFixture<HomeGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeGallaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
