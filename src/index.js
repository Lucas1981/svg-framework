import clock from './clock.js';
import SvgElement from './SvgElement.js';
import Planet from './Planet.js';

const width = 640;
const height = 480;
const planets = [
  new Planet(width * .25, height * .25, 40, 'red', 10, 30, 100),
  new Planet(width * .75, height * .25, 60, 'yellow', 20, 20, 200),
  new Planet(width * .5, height * .75, 80, 'blue', 30, 10, 300),
];

const svg = new SvgElement('svg')
  .attr('width', width)
  .attr('height', height)
  .mount('svg');

for (const planet of planets) svg.append(planet.getSvgNode());

function main() {
  for (const planet of planets) {
    planet.update();
    planet.draw();
  }
  clock.update(); // Keep the clock managed by god
  requestAnimationFrame(main); // Keep things moving
}

main();
