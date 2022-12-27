import { ReactNode } from 'react';

interface ButtonType {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  padding?: string;
  backgroundColor?: string;
  [key: string]: any;
}

export type { ButtonType };
