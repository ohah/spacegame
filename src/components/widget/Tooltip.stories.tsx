/* eslint-disable storybook/prefer-pascal-case */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';

import 'index.css';
import { Tooltip } from 'components/widget';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  // tags: ['autodocs'],
  argTypes: {
    arrow: {
      control: 'boolean',
    },
    position: {
      options: [
        'bottom',
        'bottom-end',
        'bottom-start',
        'top-end',
        'top-start',
        'top',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
      ],
      control: { type: 'radio' },
    },
    children: {
      control: false,
    },
  },
  decorators: [
    (Story, context) => {
      const args = { ...context.args, theme: context.theme };
      return <Story args={args} />;
    },
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const 기본: Story = {
  render: ({ ...args }) => {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Tooltip arrow position="top" {...args} className="w-40 h-40 border rounded flex justify-center items-center">
          툴팁
          <Tooltip.Text> 무야홍 </Tooltip.Text>
        </Tooltip>
      </div>
    );
  },
};
