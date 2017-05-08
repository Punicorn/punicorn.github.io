function TopArtistsLoader(p) {
  LastfmLoader.call(this, p);
  this.params.method = 'chart.getTopArtists';
}
TopArtistsLoader.prototype = Object.create(LastfmLoader.prototype);

TopArtistsLoader.prototype.getQuery = function(){
  return 'page=' + encodeURIComponent(this.params.page) + '&limit=' +
    encodeURIComponent(this.params.limit);
};
