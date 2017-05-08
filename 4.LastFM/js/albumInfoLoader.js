function AlbumInfoLoader(pars) {
  LastfmLoader.call(this, pars);
  this.params.method = 'album.getInfo';
}
AlbumInfoLoader.prototype = Object.create(LastfmLoader.prototype);

AlbumInfoLoader.prototype.getQuery = function(){ //searching for names requires {mbid:undefined}
  var query;
    if(this.isMbid(this.params.mbid)) {
      query = 'mbid=' + this.params.mbid;
    } else {
      query = 'artist=' + encodeURIComponent(this.params.artist) + '&album=' +
      encodeURIComponent(this.params.album);
    }
    query += '&lang=' + encodeURIComponent(this.params.lang) + '&autocorrect=' +
    encodeURIComponent(this.params.autocorrect) + '&username=' +
    encodeURIComponent(this.params.username);
  return query;
};
