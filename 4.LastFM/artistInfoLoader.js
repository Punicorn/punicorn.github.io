function ArtistInfoLoader(artist, lang, autocorrect, username, key, url) {
  LastfmLoader.call(this, key, url);
  this.query = (function() { //artist or mbid
    var artistQuery = /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(artist)?
    'mbid=' : 'artist=';
    return 'method=artist.getInfo&' + artistQuery + artist + '&lang=' + lang +
          '&autocorrect=' + autocorrect + '&username=' + username;
  })();
}
ArtistInfoLoader.prototype = Object.create(LastfmLoader.prototype);
