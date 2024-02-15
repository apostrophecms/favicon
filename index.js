const fs = require('fs');
const path = require('path');

module.exports = {
  bundle: {
    directory: 'modules',
    modules: getBundleModuleNames()
  },
  init(self) {
    self.apos.template.append('head', '@apostrophecms-pro/favicon:head');
  },
  components(self) {
    return {
      async head(req, data) {
        const image = req.data.global.favicon && apos.image.first(req.data.global.favicon);
        if (!image) {
          return {
            available: false
          };
        }
        const baseUrl = apos.attachment.url(baseUrl, { size: 'one-third' });
        return {
          available: true,
          faviconUrl: baseUrl,
          appleUrl: baseUrl
        };
      }
    };
  }
};

function getBundleModuleNames() {
  const source = path.join(__dirname, './modules/@apostrophecms');
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `@apostrophecms/${dirent.name}`);
}
