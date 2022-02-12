$('.burger-btn').on('click',function() {
    $('.mask').fadeToggle(300);
    $('.header__nav').toggleClass('open');
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
});

$('.header__item a').on('click',function() {
    $('.mask').fadeToggle(300);
    $('.header__nav').toggleClass('open');
    $('.burger-btn').toggleClass('cross');
    $('body').toggleClass('noscroll');
})

 $('.pickup__list').slick({
  slidesToShow: 3,
  slidesToScroll:1,
//   autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
    {
      breakpoint: 794,
      settings: {
        centerPadding: '60px',
        slidesToShow: 1
      }
    }
  ]  
});


// #から始まるURLがクリックされた時
$('a[href^="#"]').click(function () {
    // .headerクラスがついた要素の高さを取得
    let header = $(".header").innerHeight();
// 移動速度を指定（ミリ秒）
    let speed = 500;
// hrefで指定されたidを取得
    let id = $(this).attr("href");
// idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = $("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得しトップからの距離からヘッダー分の高さを引く
    let position = $(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    $("html, body").animate(
        {
            scrollTop: position
        },
        speed
    );
    return false;
});

// スクロール検知
$(window).on("scroll", function ($) {
// トップから100px以上スクロールしたら
    if ($(this).scrollTop() > 100) {
totopクラスを指定したセクターが映る
        $('.totop').show();
    } else {
totopクラスを指定したセクターは隠れる
        $('.totop').hide();
    }
});

// クリック時に要素に線を引く
$('.header__nav ul li a').click(function() {
$('.header__nav ul li a').removeClass( 'is-active' );
$(this).addClass( 'is-active' );
    return false;
});

