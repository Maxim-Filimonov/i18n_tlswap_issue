const middleware = require("i18next-http-middleware");
const i18next = require("i18next");
const Locize = require("i18next-locize-backend");
var { LanguageDetector } = require("i18next-http-middleware");
let options = {
  preload: ["en-AU", "zh"],
  fallbackLng: "en-AU",
  ns: ["backend"],
  backend: {
    projectId: "PROJECT_ID",
    apiKey: "LOCIZE_KEY",
    referenceLng: "en-AU",
  },
};

const init = () =>
  i18next
    .use(Locize)
    .use(LanguageDetector)
    .init(options)
    .then(() => i18next);

exports.plugin = {
  register: async (server, options) => {
    const i18n = await init();
    const i18nextMiddleware = middleware.handle(i18n);
    server.ext("onPreHandler", (request, h) => {
      i18nextMiddleware(request, false, () => {
        return true;
      });
      return h.continue;
    });
  },
  name: "i18next",
};
