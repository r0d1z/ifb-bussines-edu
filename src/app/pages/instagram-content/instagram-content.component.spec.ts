import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramContentComponent } from './instagram-content.component';

describe('InstagramContentComponent', () => {
  let component: InstagramContentComponent;
  let fixture: ComponentFixture<InstagramContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstagramContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
