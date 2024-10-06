export default function isPalindrome<T extends string>(input: T) {
  const normalisedInput = input.replace(/[^a-z0-9]/gi, ""); // remove non alpha numeric

  return normalisedInput === normalisedInput.split("").reverse().join();
}
