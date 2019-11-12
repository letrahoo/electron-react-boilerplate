import { BrowserWindow } from 'electron';
// import {} from

export let browserWindows: BrowserWindow[] = [];

export function getMainWindowOptions(): Electron.BrowserWindowConstructorOptions {
  return {
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 600,
    // titleBarStyle: process.platform === 'darwin' ? 'hidden' : undefined,
    acceptFirstMouse: true,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: false,
    },
  };
}

/**
 * Creates a new main window.
 *
 * @export
 * @returns {Electron.BrowserWindow}
 */
export function createMainWindow(): Electron.BrowserWindow {
  console.log('Creating main window');
  const browserWindow = new BrowserWindow(getMainWindowOptions());
  browserWindow.loadFile('./dist/static/index.html');
  return browserWindow;
}

/**
 * Gets or creates the main window, returning it in both cases.
 *
 * @returns {Electron.BrowserWindow}
 */
export function getOrCreateMainWindow(): Electron.BrowserWindow {
  return BrowserWindow.getFocusedWindow() || browserWindows[0] || createMainWindow();
}
