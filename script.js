function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
    
  });
}

$(function() {
  $('.book-button').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
      $('.book-button').hide();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#contact'));
    $('.book-button').show();
    return false;
  });
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};

// function init() {
//   clickityClick();
// }
//
// $(init);
