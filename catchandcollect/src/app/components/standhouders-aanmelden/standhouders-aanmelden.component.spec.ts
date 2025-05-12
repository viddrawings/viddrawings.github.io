import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandhoudersAanmeldenComponent } from './standhouders-aanmelden.component';

describe('StandhoudersAanmeldenComponent', () => {
  let component: StandhoudersAanmeldenComponent;
  let fixture: ComponentFixture<StandhoudersAanmeldenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandhoudersAanmeldenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandhoudersAanmeldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
