// 분양 탭
$(function () {
  // tabs
  // .tab-item 옆에 .on 삭제
  $(".tab-item").removeClass("on");
  // .tab-item:first-child 에게 .on 추가
  $(".tab-item:first-child").addClass("on");

  // .tab-item .tit 을 클릭했을 때
  $(".tab-item .tit").on("click", function () {
    // .tab-item에 붙어 있는 .on 삭제
    $(".tab-item").removeClass("on");

    // 방금 클릭한 나(this)의 부모(parent())에게 .on 추가
    $(this).parent().addClass("on");
  });
});

//brandstory
$(document).ready(function () {
  /* FullPage.JS*/
  $("#fullpage").fullpage({
    menu: "#fullpage__menu",
    anchors: ["a-section-1", "a-section-2", "a-section-3, a-section-4"],
    loopHorizontal: false,
    verticalCentered: false,
    controlArrows: false,
    slidesNavigation: true,
  });

  // Menu active toggle
  $("#fullpage__menu").click(function () {
    $(this).toggleClass("is-active");
    $("#fullpage").toggleClass("menu-is-active");
  });
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  centerPadding: "20px",
  focusOnSelect: true,
});
