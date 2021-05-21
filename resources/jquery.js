$(document).ready(function () {
  $('.waypoint').waypoint(
    function (direction) {
      if (direction == 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '22%;',
    }
  );

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return (
      elemBottom >= docViewTop &&
      elemTop <= docViewBottom &&
      elemBottom <= docViewBottom &&
      elemTop >= docViewTop
    );
  }
  if (window.pageYOffset == 0) {
    $('.home-nav').css('color', '#e1701a');
  }

  $(window).scroll(function () {
    if (window.pageYOffset == 0) {
      $('.navs').css('color', '#fff');
      $('.home-nav').css('color', '#fff');
      $('.home-nav').css('color', '#e1701a');
    }
    function sectionColor(a, b) {
      if (isScrolledIntoView($(`.${a}`))) {
        $('.navs').css('color', '#fff');
        $(`.${b}`).css('color', '#e1701a');
      }
    }

    sectionColor('section--2', 'about-nav');
    sectionColor('section--3', 'skill-nav');
    sectionColor('section--4', 'project-nav');
    sectionColor('section-5-title', 'cv-nav');
    sectionColor('social-contact', 'contact-nav');
  });

  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    //nav.toggle('slide');
    nav.slideToggle(200);
    if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars ');
    } else {
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }
  });
});
