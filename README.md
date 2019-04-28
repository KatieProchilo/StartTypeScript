# Getting Started

* Install Node
* Globally install TypeScript:

   ```npm i -g typescript```

* Locally install nodemon:

   ```npm i nodemon```

## VS Code

VS Code fully supports TS, so no worries here.

But, here are some recommeded extensions:

* Bracket Pair Colorizer
   * This extension allows matching brackets to be identified with colours.
   * The user can define which characters to match, and which colours to use.
* indent-rainbow
   * A simple extension to make indentation more readable.
   * This extension colorizes the indentation in front of your text alternating four different colors on each step.
* Bracket Pair Colorizer
   * This extension allows matching brackets to be identified with colours.
   * The user can define which characters to match, and which colours to use.

# Setting up the TypeScript Environment

## .gitignore

```
node_modules
.\lib
.env
```

## tsconfig.json

Configure the TypeScript compiler. It is possible to have an empty JSON object here, but a more common configuration is:

```
{
    "compilerOptions": {
        "target": "ESNext",
        "module": "commonjs",
        "sourceMap": true,
        "outDir": "./lib",
        "rootDir": "./src"
    }
}
```

### Root and out directories

Root directories will be the only place that TypeScript will live. Most commonly this folder is named ```src```.

Out directories are home to transpiled JavaScript that is generated from TypeScript code. Most commonly this folder is named ```lib```.

## package.json

Still many of the same responsibilities. The most notable difference is in the scripts:

```
"scripts": {
  "build": "node_modules/.bin/tsc --build",
  "start": "node_modules/.bin/tsc --build && node ./lib/index.js",
  "watch": "node_modules/.bin/nodemon --watch ./src -e ts --exec \"npm run start\"",
  "lint": "node_modules/.bin/tslint -c tslint.json 'src/**/*.ts'",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```