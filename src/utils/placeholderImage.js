/**
 * Cycles through and returns placeholder image paths sequentially
 * @returns {string} Path to a placeholder image in the format '/placeholders/placeholderN.jpg' where N is 1-17
 */
let currentIndex = 0;

export default function placeholderImage() {
  const placeholder = `/placeholders/placeholder${currentIndex + 1}.jpg`;

  currentIndex = currentIndex < 16 ? currentIndex + 1 : 0;

  return placeholder;
}
