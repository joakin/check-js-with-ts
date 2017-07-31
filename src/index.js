import f from "./f";

// Fails to compile because it sends no arguments
// f();

// Fails to compile because it sends a string
// f("hi");

const s = f(3);

console.log(s);
