export default abstract class Component {
  selector: string;
  node: Element;

  constructor(protected name: string) {
    this.name = name;
    this.selector = `[data-component='${name}']`;
    const el = document.querySelector(this.selector);
    if (el) {
      this.node = el;
    }
  }

  abstract init(): void;
}
