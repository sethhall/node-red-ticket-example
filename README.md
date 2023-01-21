This is to demonstrate an error in NodeRed with `package` being a reserved variable in strict mode code. This is a problem for NodeRed because it uses the "package" variable in a few places.

This page indicates that `package` is a reserved keyword in strict mode code: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

To see the error, run...

```bash
$ npm install
$ ./node_modules/.bin/rollup -c
```

The error is...

```bash

index.js → bundle.js...
[!] (plugin commonjs--resolver) SyntaxError: The keyword 'package' is reserved (109:14) in /Users/seth/test/node_modules/@node-red/registry/lib/localfilesystem.js
node_modules/@node-red/registry/lib/localfilesystem.js (109:14)
107:     // dont include it (will be picked up in scanTreeForNodesModules)
108:     if(skipValidNodeRedModules && files.indexOf("package.json") >= 0) {
109:         const package = getPackageDetails(dir)
                   ^
110:         if(package.isNodeRedModule) {
111:             return {files: [], icons: []};
    at pp$4.raise (/Users/seth/test/node_modules/rollup/dist/shared/rollup.js:20853:13)
    at pp$5.checkUnreserved (/Users/seth/test/node_modules/rollup/dist/shared/rollup.js:20760:10)
    at pp$5.parseIdent (/Users/seth/test/node_modules/rollup/dist/shared/rollup.js:20789:10)
    at pp$7.parseBindingAtom (/Users/seth/test/node_modules/rollup/dist/shared/rollup.js:19413:15)
    at pp$8.parseVarId (/Users/seth/test/node_modules/rollup/dist/shared/rollup.js:18712:18)
    at pp$8.parseVar (/Users/seth/test/node_modules/rollup/dist/shared/rollup.js:18695:10)
    at pp$8.parseVarStatement (/Users/seth/test/node_modules/rollup/dist/shared/rollup.js:18561:8)
    at pp$8.parseStatement (/Users/seth/test/node_modules/rollup/dist/shared/rollup.js:18309:17)
    at pp$8.parseBlock (/Users/seth/test/node_modules/rollup/dist/shared/rollup.js:18630:21)
    at pp$8.parseStatement (/Users/seth/test/node_modules/rollup/dist/shared/rollup.js:18312:36)
```
