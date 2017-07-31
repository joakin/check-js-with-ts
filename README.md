# Check JS files with TS

A mini repo showing how TypeScript type checking works with JSDoc on JS files.

See https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
for more information.

See `src/` for the source JS files. See `dist` for the compiled files.

Try uncommenting the lines in `src/index.js` and see the compilation step fail.

`npm start` runs the compiler on watch mode. `npm run build` runs the compiler
once.

Then, `node dist/index.js` to run your program.
