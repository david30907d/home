$(function() {
  $('#avatar').attr('src','https://avatars.githubusercontent.com/u/9366404?v=3');//this url is my avatar of github.
  $('.card-reveal p').click(function(){   
    $(this).siblings('span').children('i').click();//siblings can select many of its sibling, so you can use selector to reduce its results, so do children
  })  
});
