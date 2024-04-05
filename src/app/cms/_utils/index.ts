export const groupItems = <T, K extends string | number>(
  items: T[],
  groupFn: (t: T) => K
): Record<K, T[]> => {
  const groups = {} as Record<K, T[]>;
  for (const item of items) {
    const key = groupFn(item);
    groups[key] = (groups[key] ?? []).concat(item);
  }
  return groups;
};
