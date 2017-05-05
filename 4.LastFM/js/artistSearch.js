function artistSearchLoader(params, callback) {
  params = params || {};
  params.method = 'artist.search';
  params.query = 'artist=' + params.artist + '&page=' + params.page +
    '&limit=' + params.limit;
  load(params, callback);
}
