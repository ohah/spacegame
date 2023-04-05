import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import App from 'App';
import { queryClient } from 'test/setup';
import { render } from 'test/utils';

import { QueryClientProvider } from '@tanstack/react-query';

describe('무야홍', async () => {
  test('야수', async () => {
    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </RecoilRoot>,
    );
  });
});
