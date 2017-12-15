import Finger from "./Finger";
import inputHandler from "../inputHandler";

export default class Hand {
  constructor(x, y, fingersKey) {
    this.x = x;
    this.y = y;
    this.fingersKey = fingersKey;
    this.charge = {
      "rock": 0,
      "paper": 0,
      "scissors": 0,
    };

    this.r_ = 10;
    this.hp = 200;
    this.fingers_ = fingersKey.map((key, i) => {
      return new Finger(this, key, i * 30);
    });
  }

  addHp(n) {
    this.hp += n;
  }

  getWeapon() {
    const [f1, f2, f3] = this.fingersKey;
    const inputsForFingers = [
      inputHandler.keyMap[f1],
      inputHandler.keyMap[f2],
      inputHandler.keyMap[f3],
    ];
    const isRock = inputsForFingers.every((inp) => inp !== true);
    if (isRock) {
      this.charge.rock += 9;
      this.charge.paper = 0;
      this.charge.scissors = 0;
      if (this.charge.rock > 60) {
        return "rock";
      }
    }
    const isPaper = inputsForFingers.every((inp) => inp === true);
    if (isPaper) {
      this.charge.rock = 0;
      this.charge.paper += 9;
      this.charge.scissors = 0;
      if (this.charge.paper > 60) {
        return "paper";
      }
    }
    const isScissors = inputsForFingers.filter((inp) => inp === true).length == 2;
    if (isScissors) {
      this.charge.rock = 0;
      this.charge.paper = 0;
      this.charge.scissors += 9;
      if (this.charge.scissors > 60) {
        return "scissors";
      }
    }

    return "other";
  }

  update(ctx) {
    // render
    ctx.beginPath();
    const {x, y, r_} = this;
    ctx.arc(x, y, r_, 0, 360 * Math.PI / 180);
    ctx.stroke();

    // finger
    this.fingers_.forEach((f) => {
      f.update(ctx);
    });
  }
};