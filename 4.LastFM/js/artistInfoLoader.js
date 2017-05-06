function ArtistInfoLoader(pars) {
  LastfmLoader.call(this, pars);
  this.params.method = 'artist.getInfo';
  this.getQuery = function(){ //searching for name requires {mbid:undefined}
    var query = this.isMbid(this.params.mbid)? ('mbid=' + this.params.mbid) :
      ('artist=' + this.params.artist);
      query += '&lang=' + this.params.lang + '&autocorrect=' +
      this.params.autocorrect + '&username=' + this.params.username;
    return query;
  };
}
ArtistInfoLoader.prototype = Object.create(LastfmLoader.prototype);
