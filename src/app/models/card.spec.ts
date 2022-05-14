import { CardModel } from './card';

describe('CardModel', () => {

  let card: CardModel;
  beforeEach(() => {
    card = new CardModel(
      ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'J', 'K'],
      ['♦', '♠', '♥', '♣']
    );
  });

  it('should create an instance', () => {
    expect(card).toBeTruthy();
  });

});
