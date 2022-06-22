import { classNames } from '../../utils/classNames';

type TitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  className?: string;
};

function Title({ as = 'h1', text, className }: TitleProps) {
  const Component = as;
  return <Component className={classNames('', className)}>{text}</Component>;
}

export default Title;
