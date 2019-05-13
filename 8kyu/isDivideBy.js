function isDivideBy(number, a, b) {
  // good luck
  if (number % a === 0 && number % b === 0) {
    return true;
  } else {
    return false;
  }
}

// otra forma de hacerlo
function isDivideBy2(number, a, b) {
  return number % a === 0 && number % b === 0;
}
