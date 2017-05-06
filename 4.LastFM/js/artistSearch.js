function ArtistSearchLoader(pars) {
  LastfmLoader.call(this, pars);
  this.params.method = 'artist.search';
  this.getQuery = function(){
    return 'artist=' + this.params.artist + '&page=' + this.params.page +
    '&limit=' + this.params.limit;
  };
}
ArtistSearchLoader.prototype = Object.create(LastfmLoader.prototype);
