function ArtistInfoLoader(pars) {
  LastfmLoader.call(this, pars);
  this.params.method = 'artist.getInfo';
}
ArtistInfoLoader.prototype = Object.create(LastfmLoader.prototype);

ArtistInfoLoader.prototype.getQuery = function(){ //searching for name requires {mbid:undefined}
  var query;
    if(this.isMbid(this.params.mbid)) {
      query = 'mbid=' + this.params.mbid;
    } else {
      query = 'artist=' + encodeURIComponent(this.params.artist);
    }
    query += '&lang=' + encodeURIComponent(this.params.lang) + '&autocorrect=' +
    encodeURIComponent(this.params.autocorrect) + '&username=' +
    encodeURIComponent(this.params.username);
  return query;
};
