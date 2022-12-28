import Icons from './index';
import type { IconType } from './type';

const Icon = ({ icon, size = '25', ...props }: IconType) => {
  const SelectedIcon = icon && Icons[icon];

  if (!SelectedIcon) {
    return null;
  }
  return (
    <SelectedIcon
      style={{ margin: '0 0.3rem 0 0.3rem ' }}
      size={size}
      {...props}
    />
  );
};

export default Icon;
