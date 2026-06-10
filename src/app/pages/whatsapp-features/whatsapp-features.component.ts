import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-whatsapp-features',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './whatsapp-features.component.html',
  styleUrls: ['./whatsapp-features.component.scss']
})
export class WhatsappFeaturesComponent {}