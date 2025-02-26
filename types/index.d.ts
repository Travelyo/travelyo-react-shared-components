export * from './components';

declare global {
  interface Window {
    apiV6Config: { path: string };
    dataGlobalSettings?: { locale?: string };
  }
}
