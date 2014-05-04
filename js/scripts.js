$(document).ready(function(){
  // image, button-bg color, button text color, title color
  var scheme = {
              0:['1.jpg', '#f2c21a', '#ffffff', '#ffffff'],
              1:['2.jpg', '#000000', '#ffffff', '#000000'],
              2:['3.jpg', '#d3f4f0', '#0e6057', '#ffffff'],
              3:['4.jpg', '#e6e4ca', '#000000', '#ffffff'],
            }
  
  // var s = scheme['3'];

  // ensures first visit always is the elevator photo
  if (localStorage.getItem("visited")) {
    var s = scheme[Math.floor(Math.random()*(Object.keys(scheme).length))];
    if (Math.floor(Math.random()*100) == 0) {
      $('body').addClass('flip');
      $('.container').css('marginTop','50px');
    }
  } else {
    localStorage.setItem("visited", true);
    var s = scheme[0];
  }

  $('body').css('background-image',"url('css/images/title/"+s[0]+"')");
  $('a').css('background-color',s[1]);
  $('a').css('color',s[2]);
  $('h1').css('color',s[3]);
  
});