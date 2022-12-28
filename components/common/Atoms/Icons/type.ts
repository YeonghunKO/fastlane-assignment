import Icons from './index';

type IconsKey = typeof Icons;

interface IconType {
  size?: number | string;
  color?: string;
  icon: keyof IconsKey | typeof undefined;
  [key: string]: any;
}

export type { IconsKey, IconType };
