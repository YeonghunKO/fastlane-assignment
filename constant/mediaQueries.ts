export const BREAK_POINTS = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1800,
} as const;

export const SIZE = {
  xs: `${BREAK_POINTS.xs}px`,
  sm: `${BREAK_POINTS.sm}px`,
  md: `${BREAK_POINTS.md}px`,
  lg: `${BREAK_POINTS.lg}px`,
  xl: `${BREAK_POINTS.xl}px`,
  xxl: `${BREAK_POINTS.xxl}px`,
} as const;

export const DEVICE = {
  xs: `(max-width:${SIZE.xs})`,
  sm: `(max-width:${SIZE.sm})`,
  md: `(max-width:${SIZE.md})`,
  lg: `(max-width:${SIZE.lg})`,
  xl: `(max-width:${SIZE.xl})`,
  xxl: `(max-width:${SIZE.xxl})`,
} as const;
