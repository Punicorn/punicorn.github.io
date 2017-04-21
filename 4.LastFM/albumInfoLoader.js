function AlbumInfoLoader(artist, album, lang, autocorrect, username, key, url) {
  this.isMbid = (function() {
    if(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(artist)) {
      url = key;
      key = username;
      username = autocorrect;
      autocorrect = lang;
      lang = album;
      return true;
    }
    return false;
  })();
  LastfmLoader.call(this, key, url);
  this.query = (function(isMbid) { //artist + album or mbid
    var albumQuery = isMbid? 'mbid=' : ('album=' + album + '&artist=');
    return 'method=album.getInfo&' + albumQuery + artist + '&lang=' + lang +
          '&autocorrect=' + autocorrect + '&username=' + username;
  })(this.isMbid);
}
AlbumInfoLoader.prototype = Object.create(LastfmLoader.prototype);
