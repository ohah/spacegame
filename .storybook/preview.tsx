import type { Preview } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import React from 'react';
import { Body } from '../src/components';

/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();

const withThemeProvider = (Story, context) => {
  const html = document.querySelector('html');
  html!.className = context?.globals?.theme || 'All';
  return (
    <Body>
      <Story theme={context?.globals?.theme || 'All'} />
    </Body>
  );
};
const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'cyan',
      toolbar: {
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: [
          { title: 'All', value: 'all' },
          { title: 'cyan', value: 'cyan' },
          { title: 'dark', value: 'dark' },
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  decorators: [mswDecorator, withThemeProvider],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
