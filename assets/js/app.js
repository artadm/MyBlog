$(function () {

    var header = $('.header'),
        headerH = header.innerHeight()

    $(window).on('scroll', function () {
        if (headerH <= $(window).scrollTop()) {
            header.addClass('active')
        } else {
            header.removeClass('active')
        }
    })



});