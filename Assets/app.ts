import { isModern } from "./utils/feature-detect";

if(isModern) {
  import("./modern-app").then(aModule => console.log(aModule));
}



