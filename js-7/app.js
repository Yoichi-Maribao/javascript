$(function () {
  $('button').on('click', () => {
    $('ul').children().css({
      color: 'red',
    });
  });
});
