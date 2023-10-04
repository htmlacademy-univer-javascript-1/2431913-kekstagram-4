// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Список случайных имен для авторов комментариев
const authorNames = ['Иван', 'Анна', 'Петр', 'Мария', 'Алексей', 'Елена', 'Дмитрий', 'Ольга', 'Сергей', 'Наталья'];

// Функция для генерации случайного имени автора комментария
function getRandomAuthorName() {
  const randomIndex = getRandomNumber(0, authorNames.length - 1);
  return authorNames[randomIndex];
}

// Функция для генерации случайного текста комментария
function generateRandomComment() {
  const comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  ];

  const randomIndex = getRandomNumber(0, comments.length - 1);
  const commentText = comments[randomIndex];

  return {
    id: getRandomNumber(1, 1000), // Генерируем случайный id для комментария
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`, // Генерируем случайную аватарку
    message: commentText,
    name: getRandomAuthorName(), // Генерируем случайное имя автора
  };
}

// Функция для создания объекта фотографии с комментариями
function generatePhoto(id) {
  const url = `photos/${id}.jpg`;
  const description = `Описание фотографии номер ${id}`;
  const likes = getRandomNumber(15, 200);
  const commentsCount = getRandomNumber(0, 30);
  const comments = [];

  for (let i = 0; i < commentsCount; i++) {
    const comment = generateRandomComment();
    comments.push(comment);
  }

  return {
    id,
    url,
    description,
    likes,
    comments,
  };
}

// Функция для создания массива из 25 сгенерированных объектов
function generatePhotoArray() {
  const photoArray = [];

  for (let i = 1; i <= 25; i++) {
    const photo = generatePhoto(i);
    photoArray.push(photo);
  }

  return photoArray;
}

// Создаем массив фотографий с комментариями
const photos = generatePhotoArray();

