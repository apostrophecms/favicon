const util = require('util');

module.exports = {
  improve: '@apostrophecms/global',
  fields: {
    add: {
      favicon: {
        label: 'Favicon (browser tab icon)',
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/image': {
              minSize: [ 512, 512 ],
              aspectRatio: [ 1, 1 ]
            },
          },
          max: 1
        }
      }
    },
    group: {
      favicon: {
        label: 'Favicon',
        fields: [ 'favicon' ]
      }
    }
  },
  handlers(self) {
    return {
      beforeSave: {
        async faviconGenerateSizes(req, doc) {
          const image = apos.image.first(doc.favicon);
          if (!image) {
            return;
          }
          if (image._id === doc.faviconPreviousId) {
            return;
          }  
          const attachment = image.attachment;
          // Apple
          await self.faviconGenerateSizes(attachment, [
            {
              name: 'apple',
              width: 180,
              height: 180
            },
            {
              // Destop + Android
              name: 'standard',
              width: 192,
              height: 192
            },
          ]);
          doc.faviconPreviousId = image._id;
        }
      }
    }
  },
  methods(self) {
    return {
      async faviconGenerateSize(attachment, sizes) {
        let tempFile;
        try {
          const uploadfs = self.apos.attachment.uploadfs;
          const extension = attachment.extension;
          tempFile = `${uploadfs.getTempPath()}/${self.apos.util.generateId()}.${info.extension}`;
          const copyOut = util.promisify(uploadfs.copyOut);
          const copyImageIn = util.promisify(uploadfs.copyImageIn);
          const pathOut = apos.attachment.url(attachment, { size: 'one-third', uploadfsPath: true });
          const pathIn = apos.attachment.url(attachment, { size: 'original', uploadfsPath: true });
          await copyOut(pathOut, tempFile);
          await copyImageIn(tempFile, pathIn, {
            sizes,
            copyOriginal: false
          });
        } finally {
          if (fs.existsSync(tempFile)) {
            fs.unlinkSync(tempFile);
          }
        }
      }
    };
  }
};
