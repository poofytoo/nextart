$(document).ready(function(){
  // image, button-bg color, title color
  var scheme = {
              0:['1.jpg', '#f2c21a', '#ffffff'],
              1:['2.jpg', '#000000', '#000000'],
            }
  var s = scheme[Math.floor(Math.random()*(Object.keys(scheme).length))];
  $('body').css('background-image',"url('css/images/title/"+s[0]+"')");
  $('a').css('background-color',s[1]);
  $('h1').css('color',s[2]);
});