import clock from './clock.js';
import SvgElement from './SvgElement.js';

const degreesToRadians = Math.PI / 180;

export default class Planet {
  constructor(x, y, r, color, increase, reach, waitTime) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.base = r;
    this.angle = 0;
    this.color = color;
    this.increase = increase; // in pixels per second
    this.reach = reach;
    this.waitTime = waitTime;
    this.lastUpdate = clock.getTime();
    this.representation = new SvgElement('circle');
    this.initiate();
  }

  getSvgNode() {
    return this.representation.getSvgNode();
  }

  initiate() {
    this.representation
      .attr('class', 'planet')
      .attr('cx', this.x)
      .attr('cy', this.y)
      .attr('r', this.r)
      .attr('fill', this.color)
      .on('click', () => console.log('Intergalactic planetary'));
  }

  update() {
    const latestTime = clock.getTime();
    const elapsedTime = latestTime - this.lastUpdate;
    if (elapsedTime > this.waitTime) { // Make the movements discrete by waiting an interval
      // Translate the movement by pixelsPerFrame * framesPerSecond * elapsedTime
      const increase = this.increase * elapsedTime / 1000;
      this.angle = (this.angle + this.increase) % 360;
      this.r = this.base + (this.reach * (Math.sin(degreesToRadians * this.angle)));
      this.lastUpdate = latestTime;
    }
  }

  draw() {
    this.representation.attr('r', this.r);
  }
};
