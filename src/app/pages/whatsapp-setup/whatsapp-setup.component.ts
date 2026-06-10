import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-whatsapp-setup',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './whatsapp-setup.component.html',
  styleUrls: ['./whatsapp-setup.component.scss']
})
export class WhatsappSetupComponent {}