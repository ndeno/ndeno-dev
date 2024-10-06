export default function reverse(input: string) {
  let pointer1, pointer2;
  pointer1 = 0;
  pointer2 = input.length - 1;

  let inputArr = input.split("");

  while (pointer1 < pointer2) {
    // destructures and creates temp variables on rhs before initializing lhs
    // lhs are simultaneously initialized, so no overwriting
    [inputArr[pointer2], inputArr[pointer1]] = [
      inputArr[pointer1],
      inputArr[pointer2],
    ];
    pointer1++;
    pointer2--;
  }

  return inputArr.join("");
}
