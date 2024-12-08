/**
 * Validates if a given URL points to a valid image by attempting to load it
 * @param {string} url - The URL of the image to validate
 * @param {Function} callback - Callback function that receives validation result
 * @param {boolean} callback.isValid - True if image loads successfully, false otherwise
 */
export default function validateImageUrl(url, callback) {
  const img = new Image();
  img.onload = () => callback(true);
  img.onerror = () => callback(false);
  img.src = url;
}
