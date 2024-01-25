
function crypto(word) {
  const splitWord = word.split('');
  if (splitWord.length > 8) {
    false;
  }
  const [a, b, c, d, e, f, g, h] = splitWord;
  const changed = [b, a, d, c, f, e, h, g];
  joinedChangedWord = changed.join('');
  console.log(joinedChangedWord);
}

function check(changedWord, word) {

  const split = changedWord.split('');
  if (split.length > 8) {
    return splitWord = false;
  }
  const [a, b, c, d, e, f, g, h] = split;
  const newSplit = [b, a, d, c, f, e, h, g];
  joinedWord = newSplit.join('');
  if (joinedWord === word) {
    checked = 'true';
  } else {
    checked = 'false';
  }

  console.log(checked);
}

crypto('password');
check('apssowdr', 'password');
