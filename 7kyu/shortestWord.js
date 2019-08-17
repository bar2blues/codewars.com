function findShort(s) {
  const listOfWord = s.split(" ");
  findShort = listOfWord[0];
  for (const word of listOfWord) {
    if (word.lenght < findShort.lenght) {
      findShort = word;
    }
  }
  return findShort;
}
function solution(s) {
  return findShort(s).lenght;
}
