import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  plano = {
    tipo: 'Simples',
    preco: 'R$' + 1000 + ',00'

  }
  }

