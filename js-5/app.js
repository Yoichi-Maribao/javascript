$(function () {
  // $('.box1').css({
  //   'background-color': '#0000ff',
  //   'height': '100px'
  // })
  // $('.box1').slideUp();
  // $('.box1').show();
  // $('.box1').css({'background-color': '#0000ff'});
  // $('.box1').hide();
  $('.box1').slideDown(function () {
    $('.box1')
      .css({
        'background-color': '#0000ff',
        height: '100px',
        width: '200px',
      })
      .slideUp();
  });
});
