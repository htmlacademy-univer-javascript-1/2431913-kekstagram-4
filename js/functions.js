console.log('Функция №1');
// Объявляем функцию для проверки длины строки
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

// Тестируем функцию с разными аргументами и выводим результат в консоль
console.log(checkStringLength('проверяемая строка', 20)); // true
console.log(checkStringLength('проверяемая строка', 18)); // true
console.log(checkStringLength('проверяемая строка', 10)); // false


console.log('Функция №2');
function isPalindrome(str) {
  // Нормализуем строку: убираем пробелы и приводим к нижнему регистру
  const normalizedStr = str.replace(/\s/g, '').toLowerCase();
  // Создаем пустую строку для хранения перевернутой версии
  let reversedStr = '';
  // Итерируемся по строке в обратном порядке и записываем символы в reversedStr
  for (let i = normalizedStr.length - 1; i >= 0; i--) {
    reversedStr += normalizedStr[i];
  }
  // Сравниваем нормализованную строку с перевернутой версией
  return normalizedStr === reversedStr;
}
console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс'));  // false
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
