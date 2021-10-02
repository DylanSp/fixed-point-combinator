import { fact } from "./nonCurried";
import { fact as factCurried } from "./curried";

console.log("Non-curried version");
console.log(`fact(5): ${fact(5)} (should be 120)`);
console.log("Curried version");
console.log(`factCurried(5): ${factCurried(5)} (should be 120)`);
