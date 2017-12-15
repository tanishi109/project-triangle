import inputHandler from "../inputHandler";

export default class Finger {
  constructor(hand, key, degree) {
    this.hand = hand;
    this.key = key;
    this.degree = degree;
    this.height = 10;

    inputHandler.addHandler((input) => {
      if (input === key && this.height <= 40) {
        this.height += 9;
      }
    });
  }

  update(ctx) {
    if (inputHandler.keyMap[this.key] !== true) {
      if (this.height > 10) {
        this.height -= 9;
      }
    }

    ctx.beginPath();

    const {x, y} = this.hand;
    ctx.moveTo(x, y);

    const {height, degree} = this;
    const [x2, y2] = MathTool.posFrom(height, degree);
    ctx.lineTo(x + x2, y + y2);

    ctx.stroke();
  }
}

const MathTool = {
  posFrom(distance, degree) {
    const radian = degree * Math.PI / 180;
    const y2 = Math.sin(radian) * distance;
    const x2 = Math.cos(radian) * distance;

    return [x2, y2];
  }
};
