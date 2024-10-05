export default function insertion<T extends number>(arr: Array<T>) {
  for (let i = 1; i < arr.length; i++) {
    // get key to inspect
    const key = arr[i];

    // get pointer
    let pointer = i - 1;

    // run through sorted invariant if array at pointer is larger than the key
    while (pointer >= 0 && arr[pointer] > key) {
      // move the element at pointer up one
      arr[pointer + 1] = arr[pointer];

      // move pointer down one to next element
      pointer = pointer - 1;
    }

    arr[pointer + 1] = key;
  }

  return arr;
}
