var loader1 = new LastfmLoader();
loader1.query = 'method=chart.getTopArtists&limit=2&page=undefined';
console.log(loader1);
loader1.load(function(data) {
  console.log('Raw loader:');
  console.log(data);
});

var loader2 = new TopArtistsLoader(3, 4);
console.log(loader2);
loader2.load(function(data) {
  console.log('TOP Artist:');
  console.log(data);
});

var loader3 = new ArtistSearchLoader('Sitnik');
console.log(loader3);
loader3.load(function(data) {
  console.log('Artist Search:');
  console.log(data);
});

var loader4 = new ArtistInfoLoader('bfcc6d75-a6a5-4bc6-8282-47aec8531818');
console.log(loader4);
loader4.load(function(data) {
  console.log('Artist Info:');
  console.log(data);
});

var loader5 = new AlbumInfoLoader('63b3a8ca-26f2-4e2b-b867-647a6ec2bebd');
console.log(loader5);
loader5.load(function(data) {
  console.log('Album Info:');
  console.log(data);
});
