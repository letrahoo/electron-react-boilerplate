import dva, { connect } from 'dva';
import React from 'react';
// import { composeWithDevTools } from 'redux-devtools-extension';

// 1. Initialize
const app = dva();

// 2. Model
app.model({
  namespace: 'count',
  state: 0,
  reducers: {
    add(count) {
      return count + 1;
    },
    minus(count) {
      return count - 1;
    },
  },
});

import './app.scss';

interface IAppProps {
  count: number;
}
export class App {
  public async setup(): Promise<void | Element | React.Component> {
    // 3. View
    const Root = connect(({ count }: IAppProps) => ({
      count,
    }))((props: any) => {
      return (
        <div>
          <h2>{props.count}</h2>
          <button
            key='add'
            onClick={() => {
              props.dispatch({ type: 'count/add' });
            }}
          >
            +
          </button>
          <button
            key='minus'
            onClick={() => {
              props.dispatch({ type: 'count/minus' });
            }}
          >
            -
          </button>
        </div>
      );
    });

    // 4. Router
    app.router(() => <Root />);
    // 5. Start
    app.start('#app');
  }
}

window.ElectronDemo = window.ElectronDemo || {};
window.ElectronDemo.app = window.ElectronDemo.app || new App();
window.ElectronDemo.app.setup();
