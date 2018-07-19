/* JS file for lightbox*/


/* 
 * expands thumbnail
 */

/* get lightbox elements */
var lightbox = document.getElementById('lightbox');
var lightboxImage = document.getElementById('lightbox-image');

/* expands image */
function expandImg(element) {
    let fullImg = element.innerHTML.replace('_m.jpg', '.jpg');
    lightbox.style.display = "block";
    lightboxImage.innerHTML = fullImg;
}

/* closes expanded image */
window.onclick = function(event) {
    if (event.target == lightboxImage) {
        lightbox.style.display = "none";
    }
}


/*
 * renders grid
 */ 

var path = 'https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags=puppies&format=json&nojsoncallback=true.';

/* response status catch */
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

/* retrieve json */
function json(response) {
  return response.json()
}

/* parses through json file */
function parseFile(data) {
    var title = data.title;
    var imgLinks = data.items.map(item => item.media.m);

    setTitle(title);
    setThumbnails(imgLinks);
}

/* sets title of page */
function setTitle(title) {
    var pageTitle = document.getElementById('page-title');
    pageTitle.innerHTML = title;  
}

/* sets thumbnails of page */
function setThumbnails(imgLinks) {
    var feedGrid = document.getElementById('feed-grid');
    var feedGridContent = 
        imgLinks.map(link => {
            return '<div class=\"thumbnail\"><button class=\"feed-thumbnail\" onclick=\"expandImg(this)\"><img src=\"' 
                        + link + '\"/></button></div>';
        });

    feedGrid.innerHTML = feedGridContent.join('');
}

/* fetch flick feed json */
fetch(path)
  .then(status)
  .then(json)
  .then(function(data) {
    console.log('Request succeeded with JSON response');
    parseFile(data);
  }).catch(function(error) {
    console.log('Request failed', error);
  });