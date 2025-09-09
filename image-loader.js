const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH;

module.exports = function customLoader({ src, width, quality }) {
  // Remove any leading slashes to prevent double slashes
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  
  // Return the path with assetPrefix for both development and production
  return `${assetPrefix}/${cleanSrc}?w=${width}&q=${quality || 75}`;
};
