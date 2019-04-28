# Table of Contents

* [Getting Started](#Getting-Started)
* [Setting Up VS Code](#Setting-Up-VS-Code)
* [Setting Up the TypeScript Environment](#Setting-Up-the-TypeScript-Environment)
  * [Root and Out Directories](#Root-and-Out-Directories)
  * [File Structure](#File-Structure)
  * [tsconfig.json](#tsconfig.json)

# Getting Started

1. Install [Node](https://nodejs.org/en/download/).
2. Globally install TypeScript:

   ```npm i -g typescript```

3. Clone the repo.
   * with HTTPS:

      ```git clone https://github.com/KatieProchilo/StartTypeScript.git```

   * or, with SSH:

      ```git clone git@github.com:KatieProchilo/StartTypeScript.git```

4. ```cd``` into the project's repository and install npm packages:

   ```npm i```

5. Run the Project.
   * The watch script will execute  any time changes are saved:

      ```npm run watch```

   * Or, the start script will execute only the latest compiled JavaScript:

      ```npm start```

# Setting Up VS Code

VS Code fully supports TS.

Here are some recommeded extensions:

* **[Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)**
   * This extension allows matching brackets to be identified with colours.
   * The user can define which characters to match, and which colours to use.
* **[indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)**
   * A simple extension to make indentation more readable.
   * This extension colorizes the indentation in front of your text alternating four different colors on each step.

**NOTE:** If you know the basics of TypeScript you can probably skip the remaining reading. Write all your TS files (and no others) in ```src/``` and you should be good to go. By the same measure, do not manually alter code in ```lib/```.

# Setting Up the TypeScript Project

A lot will be identical to a Node.js project. Here are some notable differences when working in TypeScript:

## Root and Out Directories

The **root directory** is the folder where TypeScript files live. Most commonly this folder is named ```src```.

The **out directory** is the folder where transpiled JavaScript files will live. Most commonly this folder is named ```lib```.

The out directory will automatically be generated when TypeScript files are transpiled for the first time. If you ever run into errors whose solutions are not obvious, it's a good idea to try and delete the entire out directory.

## File Structure

Any number of file structures are okay as long as:
* The ```rootDir``` is specified in tsconfig.json.
   * The relative path from tsconfig.json to the root directory.
* The ```outtDir``` is specified in tsconfig.json.
   * The relative path from tsconfig.json to the out directory.

Here is one common, clean, and simple file structure to begin a TyepScript project:

```
> src/
   foo.ts
.gitignore
package.json
README.md
tsconfig.json
```

When the TypeScript is transpiled successfully, this will be the resulting file structure:

```
> lib/
   foo.js
   foo.js.map
> node_modules/
> src/
   foo.ts
.gitignore
package-lock.json
package.json
README.md
tsconfig.json
```

## tsconfig.json

Configure the TypeScript compiler. It is possible to have an empty JSON object here, but it must at least specify outDir and rootDir (unless you have a completely flat project structure). Here is a more common configuration that works for [the above file structure](#File-Structure):

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
