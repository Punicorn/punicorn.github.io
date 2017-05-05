function topArtistsLoader(params, callback) {
  params = params || {};
  params.method = 'chart.getTopArtists';
  params.query = 'page=' + params.page + '&limit=' + params.limit;
  load(params, callback);
}
