/**
 * Direct copy from
 * https://github.com/Popmotion/popmotion/blob/master/packages/popmotion/src/utils/wrap.ts
 */
export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
