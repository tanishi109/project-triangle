import inputHandler from "./inputHandler";

export default class Stage {
  constructor(width, height, ctx, entities = []) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.entities = entities;
  }

  private update() {
    const {width, height, ctx, entities} = this;
    ctx.clearRect(0, 0, width, height);

    inputHandler.handle();

    entities.forEach((ent) => {
      ent.update(ctx);
    });
  }
}
