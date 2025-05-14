$(function () {
// スライダー
$(".slide-items").slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  Infinity: true,
  centerMode: true,
  centerPadding: "300px",
  responsive: [
    {
      breakpoint: 900,
      settings: {
        centerPadding: "200px",
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 650,
      settings: {
        centerPadding: "130px" ,
        slidesToShow: 1,
      }
    },
    {breakpoint: 390,
      settings:{
        centerPadding:"100px",
        slidesToShow:1,
      }
    },
  ]
});
$(".product-items").slick({
  slidesToShow: 1,
  arrows: true,
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
});

// ハンバーガーメニュー
$(".toggle_btn").on("click",function(){
  $("header").toggleClass("open")
});

// リンクじゃないところをクリックしたとき
$(".curtain").on("click", function(){
  $("header").removeClass("open");
});

$(".nav-after ul li a").on("click",function(){
  $("header").removeClass("open");
});

// ゆっくりスクロール
$('a[href^="#"]').click(function () {
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("html, body").animate({ scrollTop:position - 160}, 700, "swing");
  return false; 
});

$(window).on('load', function() {
	// ページのURLを取得
	const url = $(location).attr('href'),
	// headerの高さを取得してそれに30px追加した値をheaderHeightに代入
	headerHeight = $('header').outerHeight() + 30;

	// urlに「#」が含まれていれば
	if(url.indexOf("#") != -1){
		// urlを#で分割して配列に格納
		const anchor = url.split("#"),
		// 分割した最後の文字列（#◯◯の部分）をtargetに代入
		target = $('#' + anchor[anchor.length - 1]),
		// リンク先の位置からheaderHeightの高さを引いた値をpositionに代入
		position = Math.floor(target.offset().top) - headerHeight;
		// positionの位置に移動
		$("html, body").animate({scrollTop:position}, 500);
	}
});

// 商品ページ、選択したとき
$(".color1").on("click" ,function(){
  $(".color1").css("background-color" , "lightblue");
  $(".color2").css("background-color" , "rgba(224, 232, 253, 0.4)");
});
$(".color2").on("click" ,function(){
  $(".color2").css("background-color" , "lightblue");
  $(".color1").css("background-color" , "rgba(224, 232, 253, 0.4)");
});
});