"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f_1 = require("./f");
// Fails to compile because it sends no arguments
// f();
// Fails to compile because it sends a string
// f("hi");
const s = f_1.default(3);
console.log(s);
//# sourceMappingURL=index.js.map