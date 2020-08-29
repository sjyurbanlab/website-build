import React, { FC, ReactNode } from 'react';

interface CardItemWithIconProps {
  icon: ReactNode;
  iconColor?: string;
  component: ReactNode;
  containerClassName?: string;
  shouldOverrideContainerClassName?: boolean;
}

export const CardItemWithIcon: FC<CardItemWithIconProps> = ({
  icon,
  iconColor,
  component,
  containerClassName,
  shouldOverrideContainerClassName,
}) => (
  <div
    className={
      shouldOverrideContainerClassName
        ? containerClassName
        : `flex items-center ${containerClassName}`
    }
  >
    <div className={`text-${iconColor || 'emerald-green'} mr-4 md:mr-6`}>
      {icon}
    </div>
    <div>{component}</div>
  </div>
);
