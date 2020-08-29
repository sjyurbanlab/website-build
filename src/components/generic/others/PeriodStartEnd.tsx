import React, { FC } from 'react';
import moment from 'moment';

interface PeriodStartEndProps {
  start?: Date;
  end?: Date;
  dateFormat?: string;
}

export const PeriodStartEnd: FC<PeriodStartEndProps> = ({
  start,
  end,
  dateFormat = 'MMMM YYYY',
}) => (
  <>
    {start && (
      <div className={'space-x-1'}>
        <p className={'inline-block font-semibold'}>
          {moment(start).format(dateFormat)}
        </p>
        {end && (
          <>
            <p className={'inline-block'}>till</p>
            <p className={'inline-block font-semibold'}>
              {moment(end).format(dateFormat)}
            </p>
          </>
        )}
      </div>
    )}
  </>
);
