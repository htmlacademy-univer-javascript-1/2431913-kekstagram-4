// Объявляем функцию для проверки длины строки
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
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
function isMeetingWithinWorkingHours(startOfWork, endOfWork, startOfMeeting, meetingDuration) {
  // Преобразуем входные строки в минуты для удобства сравнения
  const startOfWorkMinutes = convertTimeToMinutes(startOfWork);
  const endOfWorkMinutes = convertTimeToMinutes(endOfWork);
  const startOfMeetingMinutes = convertTimeToMinutes(startOfMeeting);

  // Рассчитываем время окончания встречи
  const endOfMeetingMinutes = startOfMeetingMinutes + meetingDuration;

  // Проверяем, что начало встречи и окончание встречи находятся в пределах рабочего дня
  if (
    startOfMeetingMinutes >= startOfWorkMinutes &&
    endOfMeetingMinutes <= endOfWorkMinutes
  ) {
    return true;
  }

  return false;
}

// Вспомогательная функция для преобразования времени в минуты
function convertTimeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(part => parseInt(part, 10));
  return hours * 60 + minutes;
}

