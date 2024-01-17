
const lan = prompt('Enter your language(available only - ru, en, kor, de)');

switch (lan) {
  case 'ru':
    console.log('Здраствуйте!');
    break;
  case 'en':
    console.log('Hello!');
    break;
  case 'kor':
    console.log('안녕하세요!');
    break;
  case 'de':
    console.log('Gutten tag!');
    break;
  default:
    console.log('Undefined! Please, enter available languages');
}