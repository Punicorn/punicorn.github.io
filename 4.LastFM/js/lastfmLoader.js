function load(params, callback) {
  params = params || {};
  params.key = params.key || 'ea9abab35aef9b1a492f071c30b761b2';
  params.url = params.url || 'http://ws.audioscrobbler.com/2.0/?';
  params.format = params.format || 'json';
  params.method = params.method || 'chart.getTopArtists&limit=2'; //random stuff
  params.query =  params.query || '';
  var URL = params.url + 'api_key=' + params.key + '&format=' + params.format +
    '&method=' + params.method + '&' + params.query;
  var request = new XMLHttpRequest();
  request.open('GET', URL, true);

  request.onreadystatechange = function() {
    var type = request.getResponseHeader('Content-Type');
    if (request.readyState === 4 && request.status === 200 && callback &&
      type.indexOf('application/json') + 1 && typeof(callback) === 'function') {
      callback(JSON.parse(request.responseText));
    }
  };
  request.send();
}
