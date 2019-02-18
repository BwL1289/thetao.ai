$( document ).ready(function() {

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
});

$(".get-demo").click(function() {
	 $("body").addClass('no-scroll')
	 $(".slider-wrap").animate({left: '0px'});

});
$(".left-back, .close-button").click(function() {
	 $("body").removeClass('no-scroll')
	 $(".slider-wrap").animate({left: '100%'});
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".navbar-fixed-top").addClass("stick-header");
        $("a.white-anchor").addClass("header-text");
    } else {
       $(".navbar-fixed-top").removeClass("stick-header");
       $("a.white-anchor").removeClass("header-text");
    }
});

function setModalMaxHeight(element) {
  this.$element     = $(element);
  this.$content     = this.$element.find('.modal-content');
  var borderWidth   = this.$content.outerHeight() - this.$content.innerHeight();
  var dialogMargin  = $(window).width() < 768 ? 20 : 60;
  var contentHeight = $(window).height() - (dialogMargin + borderWidth);
  var headerHeight  = this.$element.find('.modal-header').outerHeight() || 0;
  var footerHeight  = this.$element.find('.modal-footer').outerHeight() || 0;
  var maxHeight     = contentHeight - (headerHeight + footerHeight - 50);

  this.$content.css({
      'overflow': 'hidden'
  });

  this.$element
    .find('.modal-body').css({
      'max-height': maxHeight,
      'overflow-y': 'auto'
  });
}

$('.modal').on('show.bs.modal', function() {
  $(this).show();
  setModalMaxHeight(this);
});

$(window).resize(function() {
  if ($('.modal.in').length != 0) {
    setModalMaxHeight($('.modal.in'));
  }
});

$("#demo-form").submit(function(e){
    e.preventDefault();
    $('#myModal').modal('show');
    this.reset();
})
});


function checkURL (abc) {
  var string = abc.value;
  if (string){
  if (!~string.indexOf("http")) {
    string = "http://" + string;
  }
  abc.value = string;
  return abc
  }
}
