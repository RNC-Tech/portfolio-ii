module.exports = function customLoader({ src, width, quality }) {
  // Remove any leading slashes to prevent double slashes
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // For static export, we need to ensure the path is relative to the base
  if (process.env.NODE_ENV === 'production') {
    return `${basePath}/${cleanSrc}?w=${width}&q=${quality || 75}`;
  }
  
  // For development, use the standard path
  return `/${cleanSrc}?w=${width}&q=${quality || 75}`;
};
