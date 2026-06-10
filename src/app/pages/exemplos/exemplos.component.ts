import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-exemplos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './exemplos.component.html',
  styleUrls: ['./exemplos.component.scss']
})
export class ExemplosComponent {}