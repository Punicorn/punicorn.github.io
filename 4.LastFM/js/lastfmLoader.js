function LastfmLoader(param) {
  this.params = param || {};
  this.params.key = this.params.key || 'ea9abab35aef9b1a492f071c30b761b2';
  this.params.url = this.params.url || 'http://ws.audioscrobbler.com/2.0/?';
  this.params.format = this.params.format || 'json';
  this.params.method = this.params.method || 'chart.getTopArtists'; //random stuff
}

LastfmLoader.prototype.load = function(callback, difParams) {
  this.params = Object.assign(this.params, difParams);
  var request = new XMLHttpRequest();
  request.open('GET', this.getURL(), true);

  request.onreadystatechange = function() {
    var type = request.getResponseHeader('Content-Type');
    if (request.readyState === 4 && request.status === 200 && callback &&
      type.indexOf('application/json') + 1 && typeof(callback) === 'function') {
      callback(JSON.parse(decodeURI(request.responseText)));
    }
  };
  request.send();
};

LastfmLoader.prototype.getURL = function() {
  return this.params.url + 'api_key=' + encodeURIComponent(this.params.key) +
  '&format=' + encodeURIComponent(this.params.format) + '&method=' + 
  encodeURIComponent(this.params.method) + '&' + this.getQuery();
};

LastfmLoader.prototype.getQuery = function(){};

LastfmLoader.prototype.isMbid = function (sample) {
  return /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(sample);
};
