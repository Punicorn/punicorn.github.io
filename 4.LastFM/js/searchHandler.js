var responseArtists;
var artistSearchLoader;
var drawSearchPageHandler = function(data) {
  var unitsBox = document.getElementsByClassName('units-box')[0];
//var page = document.createDocumentFragment();
  unitsBox.innerHTML = '';
  if(+data.results['opensearch:totalResults'] === 0) {
    return;
  }
  var artistArray = data.results.artistmatches.artist;
  for(let i = 0; i < artistArray.length; i++) {
    var div = document.createElement('div');
    div.className = 'unit';
    div.setAttribute('data-number', i);
    div.innerHTML = '<img src="' + artistArray[i].image[2]['#text'] +
     '"><div class="title">' + artistArray[i].name + '</div>';
     unitsBox.appendChild(div);
  }
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
};


var searchButton = document.getElementById('searchButton'); //first version
searchButton.onclick = loadArtists; 
function loadArtists() {
  artistSearchLoader = artistSearchLoader || new ArtistSearchLoader();
  
  var artist = document.getElementById('searchInput').value;
  if (artist === '') return;
  artistSearchLoader.load(drawSearchPageHandler, {artist:artist, limit:5, page:1});
}

;(function() { //press Enter; second version
  document.getElementById('searchInput').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
      loadArtists();
    }
  });
})();

;(function() {
  document.getElementsByTagName('MAIN')[0].addEventListener('click', function(e) {
    var target = e.target;
    while(target.tagName.localeCompare('MAIN') !== 0) {
      switch (target.className) {
        case 'pageNum':
          artistSearchLoader.load(drawSearchPageHandler, {page: target.textContent});
          return;
        case 'unit':
          var artistInfo = new ArtistInfoLoader();
          var artistName = responseArtists[target.dataset.number].name;
          artistInfo.load(drawArtistInfoHandler, {artist: artistName});
          console.log(target.textContent);
          return;  
      }
      target = target.parentNode;
    }
  });
})();
