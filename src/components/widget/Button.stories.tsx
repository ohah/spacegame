/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';

import 'index.css';
import { Button } from 'components/widget';
import { Color } from 'utils/type';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  // tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
    className: {
      control: { type: 'text' },
    },
    color: {
      options: ['primary', 'success', 'info', 'warning', 'error'],
      control: { type: 'radio' },
    },
  },
  decorators: [
    (Story, context) => {
      const args = { ...context.args, theme: context.theme };
      return <Story args={args} />;
    },
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const 기본: Story = {
  args: {
    className: '',
    children: <>버튼</>,
  },
  render: ({ ...args }) => {
    return <Button {...args}>버튼</Button>;
  },
};
