import { Component, OnInit, Input } from '@angular/core';
import { CardModel } from 'src/app/models/card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public card: CardModel = new CardModel(
    ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'J', 'K'],
    ['♦', '♠', '♥', '♣']
  );

  public ranked: string = 'A';
  public suit: string = '♣'

  public handleRanked(ranked: string) {
    this.ranked = ranked
  }
  public handleSuit(suit: string) {
    this.suit = suit
  }

  constructor(
  ) {
  }

  ngOnInit(): void {
  }
}
