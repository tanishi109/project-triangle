export default class Judge {
  constructor(hands) {
    this.hands = hands;
    this.offenceIdMap_ = {
      "rock": 0,
      "scissors": 1,
      "paper": 2,
    };
  }

  getLoserIndice(weapons) {
    const offenceKinds = weapons.filter((w, i) => {
      return weapons.indexOf(w) === i && w !== "other";
    });

    if (offenceKinds.length === 3 || offenceKinds.length === 1) {
      return []; // drawn game
    }

    if (offenceKinds.length !== 2) {
      new Error("???");
      // console.log(offenceKinds);
    }

    const offenceIds = offenceKinds.map((o) => {
      return this.offenceIdMap_[o];
    });
    const loseFirst = (offenceIds[0] - offenceIds[1] + 3) % 3 === 1;
    const loseWeapon = loseFirst ? offenceKinds[0] : offenceKinds[1];

    return weapons.map((w, i) => {
      if (w === loseWeapon) {
        return i;
      } 
      return null;
    }).filter((i) => i !== null);
  }

  penalty(weapons) {
    const indice = weapons.map((w, i) => {
      if (w === "other") {
        return i;
      } 
      return null;
    }).filter((i) => i !== null);

    const penaltyHands = indice.map((i) => this.hands[i]);

    penaltyHands.forEach((h) => {
      h.addHp(-0.25);
    });
  }

  update(ctx) {
    const weapons = this.hands.map((h) => h.getWeapon());
    const loserIndice = this.getLoserIndice(weapons);
    const loserHands = loserIndice.map((i) => this.hands[i]);

    this.penalty(weapons);

    loserHands.forEach((h) => {
      h.addHp(-1);
    });

    const winners = this.hands.filter((h) => {
      return h.hp > 0;
    });
    const isGameSet = winners.length <= 1;

    if (isGameSet) {
      ctx.font = "30px Arial";
      ctx.fillText("YOU WIN!!", winners[0].x, winners[0].y);

      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }
};
