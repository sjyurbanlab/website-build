import React, { FC } from 'react';

interface PageButtonsProps {
  pageCount: number;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export const PageButtons: FC<PageButtonsProps> = ({
  pageCount,
  currentPage,
  setCurrentPage,
}) => (
  <div
    className={'w-fit-content flex items-baseline justify-between space-x-2'}
  >
    {Array(pageCount)
      .fill(null)
      .map((e, index) => (
        <button
          key={index}
          className={`flex-none block w-6 h-6 p-0 button ${
            currentPage === index
              ? 'text-white bg-emerald-green'
              : 'text-jet-black hover:bg-gray-300'
          }`}
          onClick={() => setCurrentPage(index)}
        >
          <p className={'text-center leading-5'}>{index + 1}</p>
        </button>
      ))}
  </div>
);
