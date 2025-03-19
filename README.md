# cookie-extractor-extension

## Cookie Extractor Chrome Extension

A simple Chrome extension that extracts all cookies from the current URL.

## Features

- Extracts cookies from the active tab.
- Displays extracted cookies in the page's DOM.
- Permissions for accessing cookies, tabs, and storage.

## Installation

1. Download or clone the repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click on **Load unpacked** and select the folder where the repository is located.

## Usage

Once the extension is installed:

1. Navigate to any website in Chrome.
2. The extension will automatically extract cookies from the active tab.
3. The extracted cookies will be added as a `<div>` element in the page's DOM with the ID `priv8_json_element`.

You can access the extracted cookies by querying this element in the page's JavaScript, for example:

```js
const storedElement = document.getElementById('priv8_json_element');
const storedData = JSON.parse(storedElement.dataset.json);
console.log('Read from element:', storedData);
```

