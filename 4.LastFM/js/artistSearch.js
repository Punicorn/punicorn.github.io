function ArtistSearchLoader(pars) {
  LastfmLoader.call(this, pars);
  this.params.method = 'artist.search';
}
ArtistSearchLoader.prototype = Object.create(LastfmLoader.prototype);

ArtistSearchLoader.prototype.getQuery = function(){
  return 'artist=' + encodeURIComponent(this.params.artist) + '&page=' +
      encodeURIComponent(this.params.page) + '&limit=' +
      encodeURIComponent(this.params.limit);
};
