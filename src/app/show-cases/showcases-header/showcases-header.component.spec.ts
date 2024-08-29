import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcasesHeaderComponent } from './showcases-header.component';

describe('ShowcasesHeaderComponent', () => {
  let component: ShowcasesHeaderComponent;
  let fixture: ComponentFixture<ShowcasesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowcasesHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcasesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
