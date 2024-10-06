export default function reverse(input: string) {
  let pointer1, pointer2;
  pointer1 = 0;
  pointer2 = input.length - 1;

  let inputArr = input.split("");

  while (pointer1 < pointer2) {
    [inputArr[pointer2], inputArr[pointer1]] = [
      inputArr[pointer1],
      inputArr[pointer2],
    ];
    pointer1++;
    pointer2--;
  }

  return inputArr.join("");
}
