function AlbumInfoLoader(pars) {
  LastfmLoader.call(this, pars);
  this.params.method = 'album.getInfo';
  this.getQuery = function(){ //searching for names requires {mbid:undefined}
    var query = this.isMbid(this.params.mbid)?
      ('mbid=' + this.params.mbid):
      ('artist=' + this.params.artist + '&album=' + this.params.album);
      query += '&lang=' + this.params.lang + '&autocorrect=' +
      this.params.autocorrect + '&username=' + this.params.username;
    return query;
  };
}
AlbumInfoLoader.prototype = Object.create(LastfmLoader.prototype);
