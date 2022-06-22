import { ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        'p-4',
        'rounded-md shadow-lg shadow-gray-500',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
