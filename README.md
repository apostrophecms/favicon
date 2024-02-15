<div align="center">
  <img src="https://raw.githubusercontent.com/apostrophecms/apostrophe/main/logo.svg" alt="ApostropheCMS logo" width="80" height="80">

  <h1>Apostrophe PRO Module Template</h1>
  <p>
    <a aria-label="Apostrophe logo" href="https://v3.docs.apostrophecms.org">
      <img src="https://img.shields.io/badge/MADE%20FOR%20Apostrophe%203-000000.svg?style=for-the-badge&logo=Apostrophe&labelColor=6516dd">
    </a>
    <a aria-label="Join the community on Discord" href="http://chat.apostrophecms.org">
      <img alt="" src="https://img.shields.io/discord/517772094482677790?color=5865f2&label=Join%20the%20Discord&logo=discord&logoColor=fff&labelColor=000&style=for-the-badge&logoWidth=20">
    </a>
  </p>
</div>

This module template serves as a starting point for new official Apostrophe PRO modules. This is where you would describe what the purpose of the module is.

## Installation

To install the module, use the command line to run this command in an Apostrophe project's root directory:

```
npm install @apostrophecms/favicon
```

## Usage

Configure the _______ module in the `app.js` file:

```javascript
require('apostrophe')({
  shortName: 'my-project',
  modules: {
    '@apostrophecms/favicon': {}
  }
});
```

### Additional usage sections

### Pre-release checks

- [ ] If the module does not include CSS, remove the Stylelint config file and dependency `npm remove --save-dev stylelint stylelint-config-apostrophe`
- [ ] If the module does not include any Vue.js components, remove 
  - [ ] set in `package.json`, `"eslint": "eslint .",`
  - [ ] remove Vue.js packages `npm remove --save-dev eslint-plugin-vue vue-eslint-parser`
- [ ] If the module does not contains any tests, remove mocha `npm remove --save-dev mocha`
- [ ] If this file contains images, please use public static endpoint to load the images.
- [ ] If any template includes a script with inline code, include the `nonce` attribute set like this: `<script nonce="{{ nonce }}">`.
