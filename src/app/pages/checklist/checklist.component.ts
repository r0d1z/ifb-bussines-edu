import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CheckItem {
  id: string;
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {
  items: CheckItem[] = [
    { id: 'ig-pro', label: 'Mudei meu Instagram para Conta Profissional', checked: false },
    { id: 'ig-bio', label: 'Arrumei minha Bio (nome claro, o que faço e link)', checked: false },
    { id: 'wa-biz', label: 'Baixei o WhatsApp Business (o do B)', checked: false },
    { id: 'wa-horario', label: 'Configurei meu Horário de Atendimento', checked: false },
    { id: 'wa-ausencia', label: 'Liguei a Mensagem de Ausência para descansar', checked: false },
    { id: 'wa-catalogo', label: 'Coloquei meus produtos com preço no Catálogo', checked: false }
  ];

  progress: number = 0;

  ngOnInit() {
    this.loadProgress();
  }

  toggleItem(item: CheckItem) {
    item.checked = !item.checked;
    this.saveProgress();
  }

  calculateProgress() {
    const completed = this.items.filter(i => i.checked).length;
    this.progress = Math.round((completed / this.items.length) * 100);
  }

  saveProgress() {
    this.calculateProgress();
    try {
      localStorage.setItem('meta-edu-checklist', JSON.stringify(this.items));
    } catch (e) {
      console.warn('LocalStorage not available');
    }
  }

  loadProgress() {
    try {
      const saved = localStorage.getItem('meta-edu-checklist');
      if (saved) {
        const savedItems: CheckItem[] = JSON.parse(saved);
        this.items = this.items.map(item => {
          const found = savedItems.find(s => s.id === item.id);
          return found ? { ...item, checked: found.checked } : item;
        });
      }
      this.calculateProgress();
    } catch (e) {
      console.warn('LocalStorage not available');
    }
  }

  clearProgress() {
    if (confirm('Tem certeza que deseja recomeçar?')) {
      this.items.forEach(i => i.checked = false);
      this.saveProgress();
    }
  }
}