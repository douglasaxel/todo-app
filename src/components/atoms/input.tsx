import { InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

function Input({ type = 'text', ...rest }: InputProps) {
  return (
    <input
      {...rest}
      type={type}
      className={classNames(
        'p-1',
        'border border-gray-500 rounded bg-transparent',
        'focus:border-transparent focus:outline-none focus:ring-2 ring-blue-400',
        rest.className
      )}
    />
  );
}

export default Input;
