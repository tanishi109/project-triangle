class InputHandler {
  constructor() {
    this.handlers = [];
    this.keyMap = {};
  }

  public setMap(key, bool) {
    this.keyMap[key] = bool;
  }

  public handle() {
    Object.keys(this.keyMap).forEach((key) => {
      if (this.keyMap[key] === true) {
        this.handlers.forEach((handler) => {
          handler(key);
        });
      }
    });
  }

  public addHandler(func) {
    this.handlers.push(func);
  }
}

export default new InputHandler();
