import { ButtonHTMLAttributes } from 'react';
import { classNames } from '../../../utils/classNames';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

function ButtonAdd({ children, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      type={type}
      className={classNames(
        'p-2 bg-blue-500 rounded px-6',
        'group hover:bg-blue-300 transition-colors duration-300',
        'focus:border-transparent focus:outline-none focus:ring-2 ring-blue-400',
        rest.className
      )}
    >
      {children}
    </button>
  );
}

export default ButtonAdd;
