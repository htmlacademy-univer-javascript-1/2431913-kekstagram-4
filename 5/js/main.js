const authorNames = ['Иван', 'Анна', 'Петр', 'Мария', 'Алексей', 'Елена', 'Дмитрий', 'Ольга', 'Сергей', 'Наталья'];
const comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MIN_AVATAR_NUMBER = 1;
const MAX_AVATAR_NUMBER = 6;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;

const NUM_PHOTOS = 25; // Количество фотографий

const photoDescriptions = [
  'Красивый закат на пляже',
  'Горизонтальное излучение солнца в лесу',
  'Городской пейзаж вечером',
  'Величественные горы в облаках',
  'Парусная лодка на озере',
  'Цветущие вишневые деревья',
  // Добавьте здесь ещё описаний по вашему усмотрению
];

const MAX_COMMENT_ID = 1000; // Максимальное значение ID для комментариев

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomAvatarNumber() {
  return getRandomNumber(MIN_AVATAR_NUMBER, MAX_AVATAR_NUMBER);
}

function getRandomAuthorName() {
  const randomIndex = getRandomNumber(0, authorNames.length - 1);
  return authorNames[randomIndex];
}

function getRandomPhotoDescription() {
  const randomIndex = getRandomNumber(0, photoDescriptions.length - 1);
  return photoDescriptions[randomIndex];
}

function generateRandomComment() {
  const randomIndex = getRandomNumber(0, comments.length - 1);
  const commentText = comments[randomIndex];

  return {
    id: getRandomNumber(1, MAX_COMMENT_ID),
    avatar: `img/avatar-${getRandomAvatarNumber()}.svg`,
    message: commentText,
    name: getRandomAuthorName(),
  };
}

function generatePhoto(id) {
  const url = `photos/${id}.jpg`;
  const description = getRandomPhotoDescription();
  const likes = getRandomNumber(MIN_LIKES, MAX_LIKES);
  const commentsCount = getRandomNumber(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT);
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

function generatePhotoArray() {
  const photoArray = [];

  for (let i = 1; i <= NUM_PHOTOS; i++) {
    const photo = generatePhoto(i);
    photoArray.push(photo);
  }

  return photoArray;
}

// Функция для получения массива сгенерированных объектов
function getGeneratedPhotos() {
  return generatePhotoArray();
}

const photos = getGeneratedPhotos();
