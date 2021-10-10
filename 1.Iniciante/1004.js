var input = require("fs").readFileSync("1.Iniciante/stdin", "utf8");
var entrada = input.split("\n");

const A = parseInt(entrada.shift());
const B = parseInt(entrada.shift());

const SOMA = A + B;

console.log(`SOMA = ${SOMA}`);
