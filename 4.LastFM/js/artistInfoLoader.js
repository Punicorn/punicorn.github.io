function isMbid(sample) {
  return /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(sample);
}

function artistInfoLoader(params, callback) {
  params = params || {};
  params.method = 'artist.getInfo';
  params.query = isMbid(params.mbid)? ('mbid=' + params.mbid) :
      ('artist=' + params.artist);
  params.query += '&lang=' + params.lang + '&autocorrect=' +
      params.autocorrect + '&username=' + params.username;
  load(params, callback);
}
