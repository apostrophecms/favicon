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
              minSize: [ 192, 192 ],
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
  }
};
