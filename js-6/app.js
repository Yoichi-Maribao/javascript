$(function () {
  // $('.box1').mouseover(() => {
  // $('.box1').css({
  //   'background-color': '#0000ff',
  // });
  // $('.box1').addClass('box1-ext');
  // });
  // $('.box1').mouseout(() => {
  // $('.box1').css({
  //   'background-color': '#ff0000',
  // });
  // $('.box1').removeClass('box1-ext');
  // });

  $('.box1').on('click', () => {
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(() => {
    $('.box1').removeClass('box1-ext');
  });
});
