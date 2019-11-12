import { isDevMode } from '../utils/is-dev-mode';

export async function setupDevtools(): Promise<void> {
  if (!isDevMode()) return;

  const {
    default: installExtension,
    REACT_DEVELOPER_TOOLS,
    REACT_PERF,
    REDUX_DEVTOOLS
  } = require('electron-devtools-installer');

  try {
    const react = await installExtension(REACT_DEVELOPER_TOOLS);
    console.log(`installDevTools: Installed ${react}`);

    const perf = await installExtension(REACT_PERF);
    console.log(`installDevTools: Installed ${perf}`);

    const redux = await installExtension(REDUX_DEVTOOLS);
    console.log(`installDevTools: Installed ${redux}`);
  } catch (error) {
    console.warn(`installDevTools: Error occured:`, error);
  }
}
