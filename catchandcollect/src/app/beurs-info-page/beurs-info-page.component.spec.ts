import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeursInfoPageComponent } from './beurs-info-page.component';

describe('BeursInfoPageComponent', () => {
  let component: BeursInfoPageComponent;
  let fixture: ComponentFixture<BeursInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeursInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeursInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
