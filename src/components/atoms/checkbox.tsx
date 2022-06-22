import { InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  readonly type?: 'checkbox';
  size?: number;
};

function Checkbox({ type = 'checkbox', size = 15, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      type={type}
      className={classNames(
        `p-1 cursor-pointer`,
        'border border-gray-500 rounded bg-transparent',
        'focus:border-transparent focus:outline-none focus:ring-2 ring-blue-400',
        rest.className
      )}
      style={{ width: size, height: size }}
    />
  );
}

export default Checkbox;
