import { classNames } from '../../utils/classNames';
import Card from '../atoms/card';
import CounterBadge from '../atoms/counterBadge';

type CounterInfoProps = {
  count?: number;
  text: string;
  bgColor?: string;
  textColor?: string;
};

function CounterInfo({ count, text, bgColor, textColor }: CounterInfoProps) {
  return (
    <Card className={classNames('flex items-center gap-x-4 bg-white')}>
      <CounterBadge count={count} bgColor={bgColor} textColor={textColor} />
      <strong className="text-xl font">{text}</strong>
    </Card>
  );
}

export default CounterInfo;
