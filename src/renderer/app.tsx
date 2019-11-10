import React from 'react';
import { render } from 'react-dom';
export class App {
  public async setup(): Promise<void | Element | React.Component> {
    const app = (
      <div>
        <h1>Hello, Electron!</h1>
      </div>
    );

    const rendered = render(app, document.getElementById('app'));
    return rendered;
  }
}

window.ElectronDemo = window.ElectronDemo || {};
window.ElectronDemo.app = window.ElectronDemo.app || new App();
window.ElectronDemo.app.setup();
