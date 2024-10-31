export default function (s: string) {
  // create left + right pointers + set
  let left = 0;
  let right = 0;
  let charSet = new Set<string>();
  let largestSubstring = 0;

  while (left < s.length) {
    // if set has not got the item, add it to the set and increment the set count
    const letter = s[right];

    if (!charSet.has(letter)) {
      charSet.add(letter);
      largestSubstring = Math.max(largestSubstring, charSet.size);
      right++;

      // if the set does have the item, remove the element from set and increment the left pointer
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }

  return largestSubstring;
}
