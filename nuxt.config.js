export default {
  mode: "universal",
  modules: ["nuxt-i18n", "./codesandbox"],
  router: {
    mode: "hash"
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English"
      },
      {
        code: "fr",
        iso: "fr-FR",
        name: "Français"
      }
    ],
    defaultLocale: "en"
  }
};
