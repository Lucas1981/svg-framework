class Clock {
  constructor() {
    this.time = new Date();
  }

  getTime() { return this.time; }

  update() { this.time = new Date(); }
}

const clock = new Clock();

export default clock;
