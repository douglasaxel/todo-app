import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { classNames } from '../../utils/classNames';

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {};

function Textarea({ ...rest }: InputProps) {
  return (
    <textarea
      {...rest}
      className={classNames(
        'p-1',
        'border border-gray-500 rounded bg-transparent',
        'focus:border-transparent focus:outline-none focus:ring-2 ring-blue-400',
        rest.className
      )}
    />
  );
}

export default Textarea;
