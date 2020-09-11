import React, { FC, ReactNode, useState } from 'react';
import { PageButtons } from '@components/generic/others/pagination/PageButtons';

interface PaginationProps {
  pages: ReactNode[];
}

export const Pagination: FC<PaginationProps> = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const showNavigation = pages.length > 1;

  return (
    <div className={showNavigation ? 'space-y-6' : ''}>
      <div className={'w-fit-content ml-auto'}>
        {showNavigation ? (
          <PageButtons
            pageCount={pages.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : null}
      </div>

      <div>{pages[currentPage]}</div>

      <div className={'w-fit-content ml-auto'}>
        {showNavigation ? (
          <PageButtons
            pageCount={pages.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : null}
      </div>
    </div>
  );
};
