import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsStandhoudersPageComponent } from './terms-standhouders-page.component';

describe('TermsStandhoudersPageComponent', () => {
  let component: TermsStandhoudersPageComponent;
  let fixture: ComponentFixture<TermsStandhoudersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsStandhoudersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsStandhoudersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
