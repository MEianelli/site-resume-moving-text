$(function(){
var buttonAction = true;

for (var i = 0; i < posts.length; i++) {
  $('.title').eq(i).html(posts[i].title);
  $('.year').eq(i).html(posts[i].year);
}

$('.row').click(function(){
  let index = $(this).index();
  if(buttonAction){
    sendString(posts[index].detail,index);
    buttonAction = false;
  } else{
    resetStoped();
    buttonAction = true;
  }
});

$('#Wordcrack').click(function(){
  $('#fadedBackground,#iframeWG,#closeButton').fadeIn('slow');//css('display','block');
});

$('#Healing').click(function(){
  $('#fadedBackground,#iframeHeal,#closeButton').fadeIn('slow');//css('display','block');
});

$('#fadedBackground,#closeButton').click(function(){
  $('#fadedBackground,#iframeHeal,#closeButton,#iframeWG').fadeOut('slow');//css('display','none');
});

$('.filter').click(function(){
  var id = $(this).attr('id');
  if(id === 'all'){
    for (var i = 0; i < posts.length; i++) {
      $('.row').eq(i).fadeIn('slow');
    }
  } else{
    for (var i = 0; i < posts.length; i++) {
      if(posts[i].type === id){
        $('.row').eq(i).fadeIn('slow');
      } else{
        $('.row').eq(i).fadeOut('slow');
      }
    }
  }
});


});
