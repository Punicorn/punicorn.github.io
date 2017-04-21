function TopArtistsLoader(page, limit, key, url) {
  LastfmLoader.call(this, key, url);
  this.query = 'method=chart.getTopArtists&page=' + page + '&limit=' + limit;
}
TopArtistsLoader.prototype = Object.create(LastfmLoader.prototype);
