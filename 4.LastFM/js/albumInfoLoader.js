function albumInfoLoader(params, callback) {
  params = params || {};
  params.method = 'album.getInfo';
  params.query = isMbid(params.mbid)? ('mbid=' + params.mbid) :
      ('artist=' + params.artist + '&album=' + params.album);
  params.query += '&lang=' + params.lang + '&autocorrect=' +
      params.autocorrect + '&username=' + params.username;
  load(params, callback);
}
