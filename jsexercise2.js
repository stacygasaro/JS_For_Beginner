/*D1 ★★ Count vowels. Write countVowels(text) : loop over the letters with for...of
and count a, e, i, o, u (capital letters too). Test with "Software Development" and
"JavaScript".*/

function countVowels(text) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let count = 0;

  for (const ch of text) {
    if (vowels.has(ch)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Software Development")); // 7
console.log(countVowels("JavaScript"));           // 3