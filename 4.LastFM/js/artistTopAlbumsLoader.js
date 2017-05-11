function ArtistTopAlbumsLoader(pars) {
  LastfmLoader.call(this, pars);
  this.params.method = 'artist.getTopAlbums';
}
ArtistTopAlbumsLoader.prototype = Object.create(LastfmLoader.prototype);

ArtistTopAlbumsLoader.prototype.getQuery = function() {
  var query;
  if(this.isMbid(this.params.mbid)) {
    query = 'mbid=' + this.params.mbid;
  } else {
    query = 'artist=' + encodeURIComponent(this.params.artist);
  }
  query += '&page=' + encodeURIComponent(this.params.page) + '&autocorrect=' +
    encodeURIComponent(this.params.autocorrect) + '&limit=' +
    encodeURIComponent(this.params.limit);
  return query;
};
