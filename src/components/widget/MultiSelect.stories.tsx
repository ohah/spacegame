/* eslint-disable storybook/prefer-pascal-case */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react';

import 'index.css';
import { MultiSelect } from 'components/widget';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  // tags: ['autodocs'],
  argTypes: {
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
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;
const lists = [
  { title: 'asd2f', value: 'asd22f' },
  { title: 'abcd', value: 'abcd' },
];
// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const 기본: Story = {
  render: ({ ...args }) => {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <MultiSelect defaultValue={[lists[0]]} onChange={e => console.log('change', e)}>
          <MultiSelect.Button>목록</MultiSelect.Button>
          {lists.map(item => {
            return (
              <MultiSelect.Option key={item.title} value={item}>
                {({ active }) => (
                  <label htmlFor={item.title} className="flex items-center cursor-pointer">
                    {/* <input
                      readOnly
                      checked={active}
                      id={item.title}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    /> */}
                    <span
                      className={`${
                        active && 'bg-blue-500'
                      } ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 py-1 px-2`}
                    >
                      {item.value}
                    </span>
                  </label>
                )}
              </MultiSelect.Option>
            );
          })}
        </MultiSelect>
      </div>
    );
  },
};
