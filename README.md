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

## reactance reducer  :Create a reducer & a actions
```
reactance reducer sample
```
### Directory structure
```
sample/
├── ...
├── src
│   ├── actions
│   │   └── sampleActions.ts
│   ├── index.html
│   ├── index.tsx
│   ├── reducers
│   │   └── sampleReducer.ts
│   └── store.ts
└── ...
```
#### sampleActions.ts
```typescript
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const sampleActions = {
  sampleAction: actionCreator<any>('SAMPLE'),
};
```
#### sampleReducer.ts
```typescript
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { sampleActions } from 'actions/sampleActions';

export type SampleState = {
  sample: any
};

const initialState: SampleState = {
  sample: Object,
};

export const sampleReducer = reducerWithInitialState(initialState)
  .case(sampleActions.sampleAction, (state: SampleState, payload: any): SampleState => ({
    ...state,
    sample: payload,
  }));
```
### help
```
$ reactance help reducer
Usage: reactance reducer|r [options] <reducer_name>

create a Redux reducer & a Redux actions

Options:
  -m, --minimum  without sample
  -h, --help     display help for command
```

## reactance component  :Create a component & a container
```
$ reactance component sample
```
### Directory structure
```
sample/
├── ...
├── src
│   ├── components
│   │   └── Sample.tsx
│   ├── containers
│   │   └── Sample.ts
│   ├── index.html
│   ├── index.tsx
│   └── store.ts
└── ...
```
#### Sample.tsx
```typescript
import * as React from 'react';

export type SampleStateAsProps = {};

export type SampleDispatchAsProps = {};

type IProps = SampleStateAsProps & SampleDispatchAsProps;

export const Sample: React.FC<IProps> = (props: IProps) => {
  return (
    <div></div>
  );
};
```
#### Sample.ts
```typescript
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'store';
import { Sample, SampleStateAsProps, SampleDispatchAsProps } from 'components/Sample';

const mapStateToProps = (rootState: RootState): SampleStateAsProps => ({});

const mapDispatchToProps = (dispatch: Dispatch): SampleDispatchAsProps => ({});

export const connectedSample = connect(mapStateToProps, mapDispatchToProps)(Sample);
```
### help
```
$ reactance help component
Usage: reactance component|c [options] <component_name>

create a React component & a Redux container

Options:
  -h, --help  display help for command
```
