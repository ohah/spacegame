import type { Meta, StoryObj } from '@storybook/react';

import 'index.css';
import { Button } from 'components/widget';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const args = { ...context.args, theme: context.theme };
      return <Story args={args} />
    },
  ]
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
// export const 안녕: Story = {
//   args: {
//     className: 'btn-primary',
//     children: <>버튼</>,
//   },
//   render: ({ theme, ...args }) => {
//     console.log(theme, args);
//     return <Button>
//       버튼
//     </Button>
//   }
// };

export const 기본: Story = {
  args: {
    className: 'btn-primary',
    children: <>버튼</>,
  },
};