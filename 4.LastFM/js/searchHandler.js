var responseArtists;
var responseAlbums;
var artistSearchLoader;

var searchButton = document.getElementById('searchButton'); //first version
searchButton.onclick = loadArtists; 
function loadArtists() {
  artistSearchLoader = artistSearchLoader || new ArtistSearchLoader();
  
  var artist = document.getElementById('searchInput').value;
  if (artist === '') return;
  artistSearchLoader.load(drawSearchPageHandler, {artist:artist, limit:25, page:1});
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
        case 'unit artist-unit':
          var artistInfo = new ArtistInfoLoader();
          var artistName = responseArtists[target.dataset.number].name;
          artistInfo.load(drawArtistInfoHandler, {artist: artistName});
          console.log(target.textContent);
          return;
        case 'unit album-unit':
          var albumInfo = new AlbumInfoLoader();
          var albumName = responseAlbums[target.dataset.number].name;
          var artistName = responseAlbums[target.dataset.number].artist.name;
          albumInfo.load(drawAlbumInfoHandler, {artist: artistName, album: albumName});
          console.log(target.textContent);
          return; 
      }
      target = target.parentNode;
    }
  });
})();
