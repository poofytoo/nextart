$(document).ready(function(){
  // image, button-bg color, button text color, title color
  var scheme = {
              0:['1.jpg', '#f2c21a', '#ffffff', '#ffffff'],
              1:['2.jpg', '#000000', '#ffffff', '#000000'],
              2:['3.jpg', '#d3f4f0', '#0e6057', '#ffffff'],
            }
  var s = scheme[Math.floor(Math.random()*(Object.keys(scheme).length))];
  $('body').css('background-image',"url('css/images/title/"+s[0]+"')");
  $('a').css('background-color',s[1]);
  $('a').css('color',s[2]);
  $('h1').css('color',s[3]);
  
  if (Math.floor(Math.random()*100) == 0) {
    $('body').addClass('flip');
    $('.container').css('marginTop','50px');
  }
});