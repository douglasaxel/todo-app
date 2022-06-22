import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

type BoxProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

function Box({ children, className, ...rest }: BoxProps) {
  return (
    <div {...rest} className={classNames('p-2', className)}>
      {children}
    </div>
  );
}

export default Box;
