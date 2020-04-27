# reactance
A CLI for React &amp; Redux to simplify the creation of components, reducers and app templates

# Usage

"reactance" has three commands
- reactance app
- reactance reducer
- reactance component

```
$ reactance --help
Usage: reactance [options] [command]

Options:
  -v, --version                       output the version number
  -h, --help                          display help for command

Commands:
  app|a [options] <app_name>          create an app template of React & Redux
  reducer|r [options] <reducer_name>  create a Redux reducer & a Redux actions
  component|c <component_name>        create a React component & a Redux container
  help [command]                      display help for command
```

## reactance app  :Create an app template
```
$ reactance app sample
Creating sample

Installing packages...
Installed successfully!

Building...
Builded successfully!


Run commands

cd sample/
npm start


$ cd sample/
$ npm start
```
### Directory structure
```
sample/
├── dist
│   ├── build.js
│   ├── build.js.map
│   └── index.html
├── node_modules
│   ├── ...
│   └── ...
├── package-lock.json
├── package.json
├── src
│   ├── index.html
│   ├── index.tsx
│   └── store.ts
├── tsconfig.json
└── webpack.config.js
```
### help
```
$ reactance help app
Usage: reactance app|a [options] <app_name>

create an app template of React & Redux

Options:
  -a, --author <author>  set author
  -m, --minimum          only React without Redux
  -h, --help             display help for command
```
