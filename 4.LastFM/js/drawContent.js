var drawSearchPageHandler = function(data) {
  var unitsBox = document.getElementsByClassName('units-box')[0];
//var page = document.createDocumentFragment();
  unitsBox.innerHTML = '';
  if(+data.results['opensearch:totalResults'] === 0) {
    return;
  }
  drawUnits(unitsBox, 'artist', data.results.artistmatches.artist);

  var pagesNum = data.results['opensearch:totalResults']/
                data.results['opensearch:itemsPerPage'];
  console.log(pagesNum);
  var paginator = document.createElement('div');
  paginator.className = 'paginator cleaner';
  //page += '<div class="paginator cleaner">';
  for(let i = 1; i <= Math.ceil(pagesNum) && i < 31; i++) {
    var current;
    if(+data.results['opensearch:Query'].startPage === i) {
      current = ' current-page">';
    } else {
      current = '">';
    }
    paginator.innerHTML += '<span class="pageNum' + current + i + '</span>';
  }
  if(pagesNum >= 31) {
    paginator.innerHTML += '<span>...</span>';
  }
  unitsBox.appendChild(paginator);
  responseArtists = data.results.artistmatches.artist; //gives URLs to redirect
  console.log(data);
};

var drawArtistInfoHandler = function(data) {
  console.log('HANDLER');
  console.log(data);
  var main = drawTitleAndLikes(data.artist.name);
  drawFirstArticle(main, data.artist.image[3]['#text'],
    '<span>' + data.artist.bio.content + '</span>');

  var albums = new ArtistTopAlbumsLoader();
  albums.load(function(albums) {
    console.log(albums);
    var article2 = document.createElement('article');
    article2.className = 'cleaner';
    article2.innerHTML = '<div class="a-title">Albums</div>';
    var unitsBox = document.createElement('div');
    unitsBox.className = 'units-box cleaner';
    var albumsArr = albums.topalbums.album;
    drawUnits(unitsBox, 'album', albumsArr);
    article2.appendChild(unitsBox);

    responseAlbums = albums.topalbums.album;
    main.appendChild(article2);
  }, {artist: data.artist.name});
};

var drawAlbumInfoHandler = function(data) {
  console.log('ALBUM');
  console.log(data);
  var main = drawTitleAndLikes(data.album.name);
  drawFirstArticle(main, data.album.image[3]['#text'],
    drawAlbumTextContent(data));
    var article2 = document.createElement('article');
    article2.className = 'cleaner';
    var aTitle = document.createElement('div');
    aTitle.className = 'a-title';
    aTitle.innerHTML = 'Tracks';
    article2.appendChild(aTitle);

    var trackBox = document.createElement('div');
    trackBox.className = 'cleaner';
    var tracks = '';
    for(let i = 1; i < 3; i++) {
      tracks += '<div><audio controls src="' + i + '.mp3"/></div>';
    }
    trackBox.innerHTML = tracks;
    article2.appendChild(trackBox);
    main.appendChild(article2);






};

function drawTitleAndLikes(theTitle) {
  var main = document.getElementsByTagName('MAIN')[0];
  main.innerHTML = '';
  var aTitle = document.createElement('div');
  aTitle.className = 'a-title';
  aTitle.innerHTML = theTitle;
  main.appendChild(aTitle);

  var likes = document.createElement('div');
  var numLikes = Math.floor(5 * Math.random() + 1);
  likes.className = 'likes';
  likes.innerHTML = (function() {
    var hearts = '';
    for(let i = 0; i < numLikes; i++) {
      hearts += '&#x2764;';
    }
    hearts += '<span>';
    for(let i = numLikes; i < 5; i++) {
      hearts += '&#x2764;';
    }
    hearts += '</span>';
    return hearts;
  })();
  main.appendChild(likes);

  return main;
}

function drawFirstArticle(main, image, textContent) {
  var article1 = document.createElement('article');
  article1.className = 'a-content cleaner';
  article1.innerHTML = (function() {
    var text = '<img src="' + image + '">';
      text += textContent;
    return text;
  })();
  main.appendChild(article1);
}

function drawAlbumTextContent(data) {
  var album = '<div>Album: ' + data.album.name + '.</div>';
  var year = '<div>Year: ' + Math.floor(15 * Math.random() + 1997) + '.</div>';
  var genre = '<div>Genre: ';
  var tags = data.album.tags.tag;
  for(let i = 0; i < tags.length - 1; i++) {
    genre += tags[i].name + ', ';
  }
  genre += tags[tags.length - 1].name + '.</div>';
  var textContent = '<div class="album-text">' + album + year +
    genre + '</div>';
    return textContent;
}

function drawUnits(boxNode, infoClass, arr) {
  for(let i = 0; i < arr.length; i++) {
    var div = document.createElement('div');
    div.className = 'unit ' + infoClass + '-unit';
    div.setAttribute('data-number', i);
    div.innerHTML = '<img src="' + arr[i].image[2]['#text'] +
      '"><div class="title">' + arr[i].name + '</div>';
    boxNode.appendChild(div);
  }
}
