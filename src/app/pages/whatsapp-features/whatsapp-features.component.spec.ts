import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappFeaturesComponent } from './whatsapp-features.component';

describe('WhatsappFeaturesComponent', () => {
  let component: WhatsappFeaturesComponent;
  let fixture: ComponentFixture<WhatsappFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsappFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
