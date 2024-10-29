export function twoSum(array: number[], target: number) {
  const map = new Map<number, number>();
  for (let i = 0; i < array.length; i++) {
    // add item and inde to map
    map.set(array[i], i);

    // find target value from pointer
    const targetValue = target - array[i];

    // check if the item is available in the map
    if (map.get(targetValue)) {
      return [i, map.get(targetValue)];
    }
  }
  return [-1, -1];
}
