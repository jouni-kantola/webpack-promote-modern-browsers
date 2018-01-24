import Component from "../component";
import "./styles";

export class Footer extends Component {
  text: string;
  constructor(text: string) {
    super("footer");
    this.text = text;
  }

  init() {
    this.node.textContent = this.text;
  }
}
