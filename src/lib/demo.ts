import { Library } from "ffi-napi";
const path = require("path");

console.log("__dirname : " + __dirname);
const p = path.join(__dirname, "dll", "demo.dll");
console.log(p);
const testDll = new Library(p, {
  add: ["int", ["int", "int"]],
  sub: ["int", ["int", "int"]],
});
export default testDll;
