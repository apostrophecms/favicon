const fs = require('fs');
const path = require('path');

module.exports = {
  i18n: {
    aposFavicon: {
      browser: true
    }
  },
  bundle: {
    directory: 'modules',
    modules: getBundleModuleNames()
  },
  init(self) {
    self.apos.template.append('head', '@apostrophecms/favicon:head');
  },
  components(self) {
    return {
      head(req) {
        const doc = req.data.global;
        const attachment = self.apos.image.first(doc.favicon);
        if (!attachment) {
          return {};
        }
        const url = self.apos.attachment.url(attachment, { size: 'one-third' });
        return {
          url
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
