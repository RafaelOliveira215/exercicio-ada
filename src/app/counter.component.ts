import { Component, computed, signal } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  protected readonly hoje = signal<Date>(new Date());
  protected readonly mensagem = signal<string>('Iniciar!');
  
  protected readonly valor = signal(0);
  
  protected readonly incrementDisabled = computed(() => this.valor() >= 10);
  protected readonly decrementDisabled = computed(() => this.valor() <= 0);

  increment() {
    const novoValor = this.valor() + 1;
    this.valor.set(novoValor);
    this.atualizarMensagem(novoValor);
  }

  decrement() {
    const novoValor = this.valor() - 1;
    this.valor.set(novoValor);
    this.atualizarMensagem(novoValor);
  }

  private atualizarMensagem(valor: number) {
    if (valor >= 10) {
      this.mensagem.set('Você atingiu o valor máximo!');
    } else if (valor <= 0) {
      this.mensagem.set('Iniciar!');
    } else {
      this.mensagem.set('');
    }
  }
}

