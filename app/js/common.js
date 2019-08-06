$(function () {

    // masonry
    $('.grid').masonry({
        itemSelector: '.grid__item',
        isAnimated: true,
        animationOptions: {
            queue: false,
            duration: 500
        },
        columnWidth: 488
    });
    // masonry end

    // active links menu
    $('.menu__group li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('current');
        }
    });
    // active links menu end


    // tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    // tabs end


    // замена стрелки
    $('.btn-next, .btn-accent-next').on('click', function () {
        $('.form__slider').slick('slickNext');
    });
    // замена стрелки end


    // active carousel
    $('.membership-page__slider .carousel-inner .carousel-item').click(function (e) {
        e.preventDefault();
        $('.membership-page__item').removeClass('active');
        $(this).closest('.membership-page__item').addClass('active');
    });
    // active carousel end

    // active carousel close
    $('.membership-page__item .btn-close').click(function (e) {
        e.preventDefault();
        $('.membership-page__item').removeClass('active');
    });
    // active carousel close end


    // выпадающий список языки
    $('.language span').on('click', function () {
        $('.language .dropdown').slideToggle();
    });
    // выпадающий список языки end


    // открытие мобильного меню
    $('.mobile-btn').on('click', function () {
        $('.overlay').fadeToggle(400);
        $('.mobile-menu').toggleClass('active');
    });
    // открытие мобильного меню end

    // открытие  контакт панели
    $('.btn-contacts-panel').on('click', function (e) {
        e.preventDefault();
        $('.overlay').fadeIn(400);
        $('.contacts-up').addClass('active');
        $('.mobile-menu').removeClass('active');
    });

    $('.contacts-up .btn-close').on('click', function () {
        $('.contacts-up').removeClass('active');
        $('.overlay').fadeOut(400);
    });
    // открытие  контакт панели end


    // активация слайдера
    $('.form__slider').slick({
        vertical: true,
        slidesToShow: 1,
        infinite: false,
        arrows: false,
        speed: 900,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: '200px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: '150px'
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: '100px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerPadding: '20px'
                }
            }
        ]
    });
    // активация слайдера end

    // счетчик форм слайдер
    $(".form__slider").on('afterChange', function (event, slick, currentSlide) {
        $("#cp").text(currentSlide + 1);
    });
    // счетчик форм слайдер end


    // отключение масонри на мобильном
    function scrollDisable() {
        var checkHeight = $(window).height();
        var checkWidth = $(window).width();
        if (checkHeight < 800 || checkWidth < 991) {
            $('.grid').masonry('destroy');
        } else if (checkHeight > 800 || checkWidth > 991) {
            $('.grid').masonry();
        }
    }

    scrollDisable();
    $(window).resize(scrollDisable);

    // отключение масонри на мобильном end

    // плавный скролл
    Scrollbar.init(document.querySelector('.workspaces .workspaces__content'));
    // плавный скролл end
});




