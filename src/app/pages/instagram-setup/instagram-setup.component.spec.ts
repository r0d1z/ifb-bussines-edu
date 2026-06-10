import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramSetupComponent } from './instagram-setup.component';

describe('InstagramSetupComponent', () => {
  let component: InstagramSetupComponent;
  let fixture: ComponentFixture<InstagramSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstagramSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
