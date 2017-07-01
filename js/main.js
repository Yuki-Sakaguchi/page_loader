$(function() {
  var
  $window = $(window),
  $ball   = $('.ball'),
  $shadow = $('.shadow'),
  $loader = $('.loader');

  var
  bounsClass = 'js-bouns',
  shadowClass = 'js-shadow',
  scaleUpClass = 'js-scale-up';

  $window.on('load', function() {
    setTimeout(function() {
      $loader.fadeOut(1000, function() {
        $loader.remove();
      });
    }, 2000);
  });
});
