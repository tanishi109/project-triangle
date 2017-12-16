export default class HP {
  constructor(hand) {
    this.hand = hand;
  }

  update(ctx) {
    ctx.beginPath();

    const {x, y, hp} = this.hand;
    ctx.rect(x, y + 80, hp, 20);

    ctx.stroke();
  }
}