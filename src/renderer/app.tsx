import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import { DECREMENT_ACTION, INCREMENT_ACTION } from './actions';
import Counter from './Components/Counter';
import rootReducer from './reducers';

const store = createStore(rootReducer);

import './app.scss';
export class App {
  public async setup(): Promise<void | Element | React.Component> {
    const rendered = () => render(
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch(INCREMENT_ACTION)}
        onDecrement={() => store.dispatch(DECREMENT_ACTION)}
      />,
      document.getElementById('app'),
    );
    const result = rendered();
    store.subscribe(rendered);
    return result;
  }
}

window.ElectronDemo = window.ElectronDemo || {};
window.ElectronDemo.app = window.ElectronDemo.app || new App();
window.ElectronDemo.app.setup();
