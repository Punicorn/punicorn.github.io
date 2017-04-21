function LastfmLoader(key, url) {
  this.key = key || 'ea9abab35aef9b1a492f071c30b761b2';
  this.url = url || 'http://ws.audioscrobbler.com/2.0/?format=json&';
  this.query = '';
  this.load = function(callback) {
    var URL = this.url + 'api_key=' + this.key + '&' + this.query;
    var request = new XMLHttpRequest();
    request.open('GET', URL, true);

    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        var type = request.getResponseHeader('Content-Type');
        if (type.indexOf('application/json') + 1 &&
          callback && typeof(callback) === 'function') {
            callback(JSON.parse(request.responseText));
        }
      }
    };
    request.send();
  };
}
