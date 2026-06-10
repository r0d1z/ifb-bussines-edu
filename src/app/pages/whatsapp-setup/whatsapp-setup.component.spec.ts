import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappSetupComponent } from './whatsapp-setup.component';

describe('WhatsappSetupComponent', () => {
  let component: WhatsappSetupComponent;
  let fixture: ComponentFixture<WhatsappSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsappSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
