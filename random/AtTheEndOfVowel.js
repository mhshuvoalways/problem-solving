function atTheEndOfVowel(value) {
  let result;
  const consonents = [];
  const vowel = [];
  for (var i = 0; i < value.length; i++) {
    if (
      value[i] !== "a" &&
      value[i] !== "e" &&
      value[i] !== "i" &&
      value[i] !== "o" &&
      value[i] !== "u"
    ) {
      consonents.push(value[i]);
    } else {
      vowel.push(value[i]);
    }
  }
  result = consonents.join("") + vowel.join("");
  console.log(result);
}

atTheEndOfVowel("programming");
atTheEndOfVowel("apple");
atTheEndOfVowel("orange");
