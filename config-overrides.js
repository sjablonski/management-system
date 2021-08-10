module.exports = function override(config) {
  const loaders = config.module.rules[1].oneOf;
  loaders
    .filter((loader) => loader.test && RegExp(/s[ac]ss/).test(String(loader.test)))
    .forEach((sassLoaders) => {
      const sassLoaderIndex = sassLoaders.use.findIndex(
        ({ loader }) => loader && RegExp(/sass-loader/).test(loader),
      );

      const newSassLoader = {
        ...sassLoaders.use[sassLoaderIndex],
        options: {
          ...sassLoaders.use[sassLoaderIndex].options,
          additionalData: '@import "assets/styles/variables";',
        },
      };

      sassLoaders.use.splice(sassLoaderIndex, 1, newSassLoader);
    });
  return config;
};
