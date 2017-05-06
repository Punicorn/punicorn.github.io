var loader1 = new LastfmLoader();
loader1.load(function(data) {
  console.log('Raw loader:');
  console.log(data);
});

var loader2 = new TopArtistsLoader();
loader2.load(function(data) {
  console.log('Top Artists loader:');
  console.log(data);
}, {page:2, limit:5});

var loader3 = new ArtistInfoLoader({mbid:'bfcc6d75-a6a5-4bc6-8282-47aec8531818'});
loader3.load(function(data) {
  console.log('Artist Info loader:');
  console.log(data);
});

var loader4 = new ArtistSearchLoader({page:2, limit:5, artist:'Sitnik'});
loader4.load(function(data) {
  console.log('Artist search loader:');
  console.log(data);
});
loader4.load(function(data) {
  console.log('Artist search loader:');
  console.log(data);
}, {page:1});


var loader5 = new AlbumInfoLoader();
loader5.load(function(data) {
  console.log('Album info loader:');
  console.log(data);
}, {mbid:'63b3a8ca-26f2-4e2b-b867-647a6ec2bebd'});
