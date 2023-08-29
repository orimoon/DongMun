var splide = new Splide(".splide", {
  type: "loop",
  // padding: '5rem',
});

splide.mount();
// 영상
$(function () {
  $(".custom_scroll_content").attr("tabindex", "-1");

  var pop_currentN = 0;
  var vid = document.getElementById("myVideos");
  var pop_vid = document.getElementById("myVideos_pop");

  $(".magagin_movie a").click(function () {
    if ($(this).hasClass("controll")) {
      if (!$(this).hasClass("off")) {
        $(this).addClass("off");
        vid.play();
        pop_vid.play();
      } else {
        $(this).removeClass("off");
        vid.pause();
        pop_vid.pause();
      }
    } else if ($(this).hasClass("sound")) {
      if (!$(this).hasClass("off")) {
        $(this).addClass("off");
        pop_vid.muted = false;
      } else {
        $(this).removeClass("off");
        pop_vid.muted = true;
      }
    } else {
      vid.pause();
      if (!$(".magagin_movie .sound").hasClass("off")) {
        pop_vid.muted = true;
      } else {
        pop_vid.muted = false;
      }

      $(".magagin_pop").addClass("on");

      if ($(".magagin_movie .controll").hasClass("off")) {
        $(".magagin_pop .con .controll").addClass("off");
      } else {
        $(".magagin_pop .con .controll").removeClass("off");
        pop_currentN = pop_vid.currentTime;
      }
      if ($(".magagin_movie .sound").hasClass("off")) {
        $(".magagin_pop .con .sound").addClass("off");
      } else {
        $(".magagin_pop .con .sound").removeClass("off");
      }
    }
  });
  $(".magagin_pop .con a").click(function () {
    if ($(this).hasClass("controll")) {
      if (!$(this).hasClass("off")) {
        $(this).addClass("off");
        $(".magagin_movie .controll").addClass("off");
        pop_vid.play();
      } else {
        $(this).removeClass("off");
        $(".magagin_movie .controll").removeClass("off");
        pop_vid.pause();
      }
    } else {
      if (!$(this).hasClass("off")) {
        $(this).addClass("off");
        $(".magagin_movie .sound").addClass("off");
        pop_vid.muted = false;
      } else {
        $(this).removeClass("off");
        $(".magagin_movie .sound").removeClass("off");
        pop_vid.muted = true;
      }
    }
  });

  $(".magagin_pop .in .close").click(function () {
    if (pop_vid.ended) {
      $(".magagin_pop .con .controll").removeClass("off");
      $(".magagin_movie .controll").removeClass("off");
      vid.currentTime = 0;
      vid.pause();
    } else {
      vid.currentTime = pop_vid.currentTime;
      vid.play();
    }

    $(".magagin_pop").removeClass("on");
    if ($(".magagin_pop .sound").hasClass("off")) {
      $(".magagin_movie .sound").addClass("off");
    } else {
      $(".magagin_movie .sound").removeClass("off");
    }

    if ($(".magagin_pop .con .controll").hasClass("off")) {
      vid.currentTime = pop_vid.currentTime;

      vid.play();
    } else {
      vid.pause();
    }
  });

  $(".magagin_pop .in .close").blur(function () {
    $(this).trigger("click");
    $(
      ".new_grid_container div:first-child .gu_link_hover:first-child a"
    ).focus();
  });

  $("#MAGAZINE_CATEGORY_LIST .category_list_area .view_all a").blur(
    function () {
      $("#FOOTER .top .btns_another a").eq(0).focus();
    }
  );

  if (vid) {
    vid.addEventListener("ended", function () {
      $(".magagin_movie .controll").removeClass("off");
    });
  }
  if (pop_vid) {
    pop_vid.addEventListener("ended", function () {
      $(".magagin_pop .con .controll").removeClass("off");
    });
  }
});
