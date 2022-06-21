import { ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div
      className={classNames(
        'p-4',
        'rounded-md shadow-lg shadow-gray-500',
        'xl:min-w-[720px]'
      )}
    >
      {children}
    </div>
  );
}

export default Card;
