import { generatePhotoArray } from './data.js';
import { getRenderedCards } from './module.js';
const NUM_PHOTOS = 25; // Количество фотографий
const photos = generatePhotoArray(NUM_PHOTOS);
getRenderedCards();
