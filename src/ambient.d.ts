// Type-only-import
import { App as AppType } from './renderer/app';

declare global {
  interface Window {
    ElectronDemo: {
      app: AppType;
    };
  }
}
