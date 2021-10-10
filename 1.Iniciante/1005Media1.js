const input = require("fs").readFileSync("1.Iniciante/stdin", "utf8");

const entrada = input.split("\n");

const A = parseFloat(entrada.shift()); // peso 3.5
const B = parseFloat(entrada.shift()); // peso 7.5

const MEDIA = (( (A * 3.5) + (B * 7.5) ) / 11).toFixed(5);

console.log("MEDIA =", MEDIA);
