import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-instagram-content',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './instagram-content.component.html',
  styleUrls: ['./instagram-content.component.scss']
})
export class InstagramContentComponent {}