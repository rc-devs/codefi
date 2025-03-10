import { Component, signal } from '@angular/core';
import { QuoteCardComponent } from './quote-card/quote-card.component';

@Component({
  selector: 'app-quote-rotator',
  imports: [QuoteCardComponent],
  templateUrl: './quote-rotator.component.html',
  styleUrl: './quote-rotator.component.css'
})
export class QuoteRotatorComponent {
    quotes = signal(['quote 1', 'quote 2', 'quote 3']);
    currentQuote = signal(this.quotes);
}
