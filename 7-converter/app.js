
function conversion(ChangedValuta, balance, presentValuta = 'rub') {
  if (ChangedValuta === 'usd' && presentValuta === 'rub') {
    balance = balance * 0.876;
    presentValuta = '$';
  } else if (ChangedValuta === 'won' && presentValuta === 'rub') {
    balance = balance * 0.799;
    presentValuta = '₩'
  } else if (ChangedValuta === 'yen' && presentValuta === 'rub') {
    balance = balance * 0.545;
    presentValuta = '¥'
  } else if (ChangedValuta === 'rub') {
    balance = balance;
    presentValuta = '₽'
  } else {
    balance = null;
    presentValuta = '';
  }

  conversion = balance + presentValuta;
  return conversion;
}

console.log(conversion('yen', 1000));