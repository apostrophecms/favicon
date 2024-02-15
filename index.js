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
      head(req) {
        const doc = req.data.global;
        const attachment = self.apos.image.first(doc.favicon);
        console.log(attachment);
        if (!attachment) {
          return {};
        }
        const url = self.apos.attachment.url(attachment, { size: 'one-third' });
        console.log(url);
        return {
          url
        };
      }
    }
  }
};

function getBundleModuleNames() {
  const source = path.join(__dirname, './modules/@apostrophecms');
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `@apostrophecms/${dirent.name}`);
}
