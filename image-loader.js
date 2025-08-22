module.exports = function customLoader({ src, width, quality }) {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/portfolio-ii/projects' : '';
  return `${basePath}${src}?w=${width}&q=${quality || 75}`;
};
