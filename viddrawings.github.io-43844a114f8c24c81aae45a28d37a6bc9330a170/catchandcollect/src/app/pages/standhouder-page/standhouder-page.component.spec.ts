import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandhouderPageComponent } from './standhouder-page.component';

describe('StandhouderPageComponent', () => {
  let component: StandhouderPageComponent;
  let fixture: ComponentFixture<StandhouderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandhouderPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandhouderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
