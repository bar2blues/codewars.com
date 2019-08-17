function getCount(str) {
  //let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const letters = str.split("");
  return letters.reduce((accum, currentLetter) => {
    if (vowels.includes(currentLetter)) {
      accum++;
    }
    return accum;
  }, 0);
}
