import type { Meta, StoryObj } from '@storybook/react';

import 'index.css';
import { Button } from 'components/widget';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    theming: {
      themeOverride: 'cyan', // component level override
    },
  },
  argTypes: {
    // color: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    className: 'btn-primary',
    children: <>버튼</>,
  },
};

export const Secondary: Story = {
  args: {
    className: 'btn-primary',
    children: <>버튼</>,
  },
};

export const Large: Story = {
  args: {
    className: 'btn-primary',
    children: <>버튼</>,
  },
};

export const Small: Story = {
  args: {
    className: 'btn-primary',
    children: <>버튼</>,
  },
};
