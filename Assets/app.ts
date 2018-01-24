import "./styles";

// utils
import pause from "./utils/pause";
import { leftIn } from "./utils/tree-shaked";

// components
import { Header } from "./components/header";
import { Footer } from "./components/footer";


const header = new Header("yes");
const footer = new Footer("no");

async function stayAWhileAndListen() {
  console.log("waiting for you...");
  await pause(2000);
  console.log("talk already, mister!");
}

stayAWhileAndListen();
console.log(leftIn);
