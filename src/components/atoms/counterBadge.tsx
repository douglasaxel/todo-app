import { classNames } from '../../utils/classNames';

type CounterBadgeProps = {
  count?: number;
  bgColor?: string;
  textColor?: string;
};

function CounterBadge({
  bgColor = 'transparent',
  textColor = '#000',
  count = 0,
}: CounterBadgeProps) {
  return (
    <div
      className={classNames(
        'flex items-center justify-center',
        'h-16 w-16 rounded-full',
        'font-bold text-4xl'
      )}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {count}
    </div>
  );
}

export default CounterBadge;
