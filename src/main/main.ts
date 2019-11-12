import { app } from 'electron';

import { isDevMode } from '../utils/devmode';
import { setupDevtools } from './devtools';
import { getOrCreateMainWindow } from './windows';

export async function onReady() {
  if (!isDevMode()) {
    process.env.NODE_ENV = 'production';
  }
  getOrCreateMainWindow();
  await setupDevtools();
}

export function onBeforeQuit() {
  (global as any).isQutting = true;
}

export function onWindowAllClosed() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
};

export function main() {
  // Handle creating/removing shortcuts on Windows when
  // installing/uninstalling
  // if (shouldQuit()) {
  //   app.quit();
  //   return;
  // }
  app.name = 'Electron Demo';

  // Ensure that there's only ever one Fiddle running

  // Launch

  // This method will be called when Electron has finished
  // Initialization and is ready to create browser windows
  // Some APIs can only be used after this event occurs
  app.on('ready', onReady);
  app.on('before-quit', onBeforeQuit);
  app.on('window-all-closed', onWindowAllClosed);
  app.on('activate', getOrCreateMainWindow);
}

main();
