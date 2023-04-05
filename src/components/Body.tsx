/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

interface BodyProps {
  children: React.ReactNode;
}
const Body = ({ children }: BodyProps) => {
  return (
    <div className="min-h-screen w-full cyan:text-gray-200 cyan:bg-cyan-800 dark:text-gray-100 dark:bg-stone-800"> {children} </div>
  )
};

export default Body;
