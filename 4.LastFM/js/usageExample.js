load(undefined, function(data) {
  console.log('Raw loader:');
  console.log(data);
});

artistSearchLoader({artist:'Sitnik', page:2, limit:2}, function(data) {
  console.log('Artist Search:');
  console.log(data);
});

topArtistsLoader({page:3, limit:4}, function(data) {
  console.log('Top Artists:');
  console.log(data);
});

artistInfoLoader({mbid:'bfcc6d75-a6a5-4bc6-8282-47aec8531818'}, function(data) {
  console.log('Artist Info:');
  console.log(data);
});

albumInfoLoader({mbid:'63b3a8ca-26f2-4e2b-b867-647a6ec2bebd'}, function(data) {
  console.log('Album Info:');
  console.log(data);
});
