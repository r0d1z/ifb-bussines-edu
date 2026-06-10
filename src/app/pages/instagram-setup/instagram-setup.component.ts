import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-instagram-setup',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './instagram-setup.component.html',
  styleUrls: ['./instagram-setup.component.scss']
})
export class InstagramSetupComponent {}