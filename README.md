# reactance
A CLI for React &amp; Redux to simplify the creation of components, reducers and app templates

# Usage

"reactance" has 5 commands
- reactance new
- reactance reducer
- reactance component
- reactance api
- reactance extractor

```
$ reactance --help
Usage: reactance [options] [command]

Options:
  -v, --version                       output the version number
  -h, --help                          display help for command

Commands:
  new|n [options] <app_name>              create a new app template of React & Redux
  reducer|r [options] <reducer_name>      create a Redux reducer & a Redux actions
  component|c [options] <component_name>  create a React component & a Redux container
  api|a <api_component_name>              create a React & Redux api component
  extractor|e <extractor_component_name>  create a React & Redux extractor component
  help [command]                          display help for command
```

## reactance new  :Create a new app template of React & Redux
```
$ reactance new sample
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
### Build&Run
```
npm run build && npm start
```
### ESLint
```
npm run lint
npm run lint:fix
```
### Maintenance
```
npm run clean
npm run upgrade
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
#### index.html
```html
<!DOCTYPE html>
<html lang="ja">
    <meta charset="UTF-8">
    <title></title>
</html>
<body>
    <div id="root"></div>
</body>
```
#### index.tsx
```
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History, createBrowserHistory } from 'history';
import { createStore } from 'store';

const history :History = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>Hello World</div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
```
#### store.ts
```
import {
  createStore as reduxCreateStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import { connectRouter, routerMiddleware, RouterState } from 'connected-react-router';
import { History } from 'history';
import logger from 'redux-logger';

export type RootState = {
  router: RouterState,
};

export const createStore = (history: History) => {
  const rootReducer = combineReducers<RootState>({
    router: connectRouter(history),
  });

  return reduxCreateStore(
    rootReducer,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        logger,
      ),
    ),
  );
}
```
### help
```
$ reactance help new    
Usage: reactance new|n [options] <app_name>

create a new app template of React & Redux

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
│   ├── reducers
│   │   └── sampleReducer.ts
│   ├── ...
│   ├── index.html
│   ├── index.tsx
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
│   │   └── SampleCTR.tsx
│   ├── ...
│   ├── index.html
│   ├── index.tsx
│   └── store.ts
└── ...
```
#### Sample.tsx
```typescript
import * as React from 'react';

type IProps = {};

export const Sample: React.FC<IProps> = (props: IProps) => {
  return (
    <div></div>
  );
};
```
#### SampleCTR.tsx
```typescript
import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Sample as SampleComp } from 'components/Sample';
import { RootState } from 'store';

type IProps = {};

export const Sample: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {}

  return <SampleComp {..._props}/>;
};
```
### help
```
$ reactance help component
Usage: reactance component|c [options] <component_name>

create a React component & a Redux container

Options:
  -m, --minimum  only a React component without a Redux container
  -h, --help  display help for command
```

## reactance api  :Create a React & Redux api component
```
$ reactance api sample
```
### Directory structure
```
sample/
├── ...
├── src
│   ├── api
│   │   └── SampleAPI.tsx
│   ├── ...
│   ├── index.html
│   ├── index.tsx
│   └── store.ts
└── ...
```
#### SampleAPI.tsx
```typescript
import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

export const SampleAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  React.useEffect(() => {}, [data]);

  return null;
};
```
### help
```
$ reactance help api      
Usage: reactance api|a [options] <api_component_name>

create a React & Redux api component

Options:
  -h, --help  display help for command
```

## reactance extractor  :Create a React & Redux extractor component
```
$ reactance extractor sample
```
### Directory structure
```
sample/
├── ...
├── src
│   ├── extractor
│   │   └── SampleExtractor.tsx
│   ├── ...
│   ├── index.html
│   ├── index.tsx
│   └── store.ts
└── ...
```
#### SampleExtractor.tsx
```typescript
import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

const extract = (data: RootState): RootState => (
  data
);

export const SampleExtractor: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  React.useEffect(() => {
    const extractedData = extract(data);
  }, [data]);

  return null;
};
```
### help
```
$ reactance help extractor       
Usage: reactance extractor|e [options] <extractor_component_name>

create a React & Redux extractor component

Options:
  -h, --help  display help for command
```
