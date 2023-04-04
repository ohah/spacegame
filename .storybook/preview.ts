import type { Preview } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

const preview: Preview = {
  decorators: [mswDecorator],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'light',
          class: ['light-theme'],
          color: '#ffffff',
          default: true,
        },
        {
          name: 'dark',
          // The class dark will be added to the body tag
          class: ['dark-theme'],
          color: '#000000',
        },
        {
          name: 'cyan',
          // The class cyan will be added to the body tag
          class: ['cyan-theme'],
          color: '#155e75',
        },
      ],
    },
  },
};

export default preview;
