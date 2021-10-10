var input = require("fs").readFileSync("1.Iniciante/stdin", "utf8");
var entrada = input.split("\n");

let PROD = parseInt(entrada.shift()) * parseInt(entrada.shift());

console.log(`PROD = ${PROD}`);
