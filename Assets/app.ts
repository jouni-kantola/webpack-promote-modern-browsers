import { Header } from "./components/header";
import { Footer } from "./components/footer";
import pause from "./utils/pause";

const header = new Header("yes");
const footer = new Footer("no");

async function stayAWhileAndListen() {
  console.log("waiting for you...");
  await pause(2000);
  console.log("talk already, mister!");
}

stayAWhileAndListen();
