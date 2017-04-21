function ArtistSearchLoader(artist, page, limit, key, url) {
  LastfmLoader.call(this, key, url);
  this.query = 'method=artist.search&artist=' + artist +
              '&page=' + page + '&limit=' + limit;
}
ArtistSearchLoader.prototype = Object.create(LastfmLoader.prototype);
