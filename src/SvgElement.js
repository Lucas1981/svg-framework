export default class SvgElement {
  constructor(name) {
    this.element = document.createElementNS("http://www.w3.org/2000/svg", name);
  }

  getSvgNode() {
    return this.element;
  }

  mount(id) {
    document.getElementById(id).appendChild(this.element);
    return this;
  }

  unmount(id) {
    document.getElementById(id).removeChild(this.element);
    return this;
  }

  attr(key, value) {
    this.element.setAttribute(key, value);
    return this;
  }

  append(child) {
    this.element.appendChild(child);
    return this;
  }

  remove(child) {
    this.element.removeChild(child);
    return this;
  }

  on(event, fn) {
    this.element.addEventListener(event, fn);
    return this;
  }

  off(event, fn) {
    this.element.removeEventListener(event, fn);
    return this;
  }
};
