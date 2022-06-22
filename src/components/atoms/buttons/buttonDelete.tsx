import { ButtonHTMLAttributes } from 'react';
import { classNames } from '../../../utils/classNames';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

function ButtonDelete({ children, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      className={classNames(
        'p-2 bg-red-500 rounded-full',
        'group hover:bg-red-300 transition-colors duration-300',
        'focus:border-transparent focus:outline-none focus:ring-2 ring-red-400',
        rest.className
      )}
    >
      {children}
    </button>
  );
}

export default ButtonDelete;
