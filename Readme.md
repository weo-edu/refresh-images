# refresh-images

Refresh img tags that match a certain src/url.  Useful in conjunction with [invalidate](https://github.com/weo-edu/invalidate) to update a changed image without a page reload.

## Installation

`npm install refresh-images --save`

## Usage

```javascript
var invalidate = require('invalidate')
var refreshImages = require('refresh-images')

function avatarChanged (url) {
  invalidate(url, function (err) {
    if (err) throw err
    refreshImages(url)
  })
}
```