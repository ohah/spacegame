/* eslint-disable consistent-return */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from 'App';
import { worker } from 'mocks/worker';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'index.css';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

if (import.meta.env.DEV) {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
