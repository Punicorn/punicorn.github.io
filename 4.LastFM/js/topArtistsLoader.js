function TopArtistsLoader(p) {
  LastfmLoader.call(this, p);
  this.params.method = 'chart.getTopArtists';
  this.getQuery = function(){
    return 'page=' + this.params.page + '&limit=' + this.params.limit;
  };
}
TopArtistsLoader.prototype = Object.create(LastfmLoader.prototype);
