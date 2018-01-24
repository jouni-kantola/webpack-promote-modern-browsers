import Component from "../component";
import "./styles";

export class Header extends Component {
  text: string;
  constructor(text: string) {
    super("header");
    this.text = text;
  }

  init() {
    this.node.textContent = this.text;
  }
}
