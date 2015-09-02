/**
 * Refresh all images
 */

function refreshImages (url) {
  var imgs = [].slice.call(document.querySelectorAll('img[src="' + url + '"]'))

  imgs.forEach(function (img) {
    var newImg = new Image()

    for (var i = 0; i < img.attributes.length; i++) {
      newImg[img.attributes[i].name] = img.attributes[i].value
    }

    img.parentNode.replaceChild(newImg, img)
  })
}

/**
 * Exports
 */

module.exports = refreshImages