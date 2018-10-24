$(function() {
  $("#myModal").on("show.bs.modal", function(event) {
    var element = $(event.relatedTarget);
    // var element = elem.parentNode;

    var title = element.find(".pvworks-title").text();
    console.log(title);
    var desc = element.find(".pvworks-description").text();
    console.log(desc);
    var image = element.find(".pvworks-image").attr("src");
    console.log(image);
    var modal = $(this);
    $(".modal-title").html(title);
    $(".modal-desc").html(desc);
    $(".modal-img").attr("src", image);
  });
});

$(window).scroll(function() {
  var $navbar = $(".navbar-default");

  if ($(window).scrollTop() > 100) {
    $navbar.css({
      background: "linear-gradient(-45deg, #8739e5 0%, #5496ff 100%)",
      padding: "15px"
    });
  } else {
    $navbar.css({ background: "transparent", padding: "30px 70px" });
  }

  //fade feature
  if ($(window).width() > 767) {
    $(".pvbanner").css(
      "opacity",
      1 - $(window).scrollTop() / $(".pvbanner-hero").innerHeight()
    );
  }

  // $.fn.isOnScreen = function() {
  //   var win = $(window);

  //   var viewport = {
  //     top: win.scrollTop(),
  //     left: win.scrollLeft()
  //   };
  //   viewport.right = viewport.left + win.width();
  //   viewport.bottom = viewport.top + win.height();

  //   var bounds = this.offset();
  //   bounds.right = bounds.left + this.outerWidth();
  //   bounds.bottom = bounds.top + this.outerHeight();

  //   return !(
  //     viewport.right < bounds.left ||
  //     viewport.left > bounds.right ||
  //     viewport.bottom < bounds.top ||
  //     viewport.top > bounds.bottom
  //   );
  // };
});

(function($, win) {
  $.fn.inViewport = function(cb) {
    return this.each(function(i, el) {
      function visPx() {
        var elH = $(el).outerHeight(),
          H = $(win).height(),
          r = el.getBoundingClientRect(),
          t = r.top,
          b = r.bottom;
        return cb.call(
          el,
          Math.max(0, t > 0 ? Math.min(elH, H - t) : Math.min(b, H))
        );
      }
      visPx();
      $(win).on("resize scroll", visPx);
    });
  };
})(jQuery, window);

$(".navbar-toggle").click(function() {
  $(".navbar-default").css({
    background: "linear-gradient(45deg, #8739e5 0%, #5496ff 100%)"
  });
});

// smooth scroll
$(".navbar-menu li a, #fullNav ul li a").click(function() {
  // $(this).addClass("active");
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    1000
  );
  return false;
});

var $fullNav = $("#fullnav");

$("#mobile-nav").click(function() {
  $fullNav.css("height", "100%");
});
$("#fullnav a").click(function() {
  $fullNav.css("height", "0%");
});

if ($(window).width() > 768) {
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: { triggerHook: "onEnter", duration: "200%" }
  });

  new ScrollMagic.Scene({ triggerElement: "#parallax1" })
    .setTween("#parallax1 .pvbanner-rect1", { y: "50%", ease: Linear.easeNone })
    // .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: "#parallax1" })
    .setTween("#pvbanner-hero .pvbanner-hero-text", {
      y: "-40%",
      ease: Linear.easeNone
    })
    // .addIndicators()pvbanner-hero
    .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: "#services" })
    .setTween("#services .card", { y: "-10%", ease: Linear.easeNone })
    // .addIndicators()
    .addTo(controller);

  //animates.css

  $(".pvprocess-timeline-content .content-wrapper").inViewport(function(px) {
    if (px > 20) {
      $(".content-wrapper").addClass("animated fadeInUp slowly delay-5s");
      // $(".content-wrapper-desc--left").addClass("animated fadeInLeft");
    }
  });

  $("#about").inViewport(function(px) {
    if (px > 200) {
      $(".pvwho").addClass("animated fadeInUp slow delay-3s");
      // $(".content-wrapper-desc--left").addClass("animated fadeInLeft");
    }
  });

  $("#contact").inViewport(function(px) {
    if (px > 0) {
      $(this).addClass("animated fadeInUp slowly delay-5s");
      // $(".content-wrapper-desc--left").addClass("animated fadeInLeft");
    }
  });
}

// var $pvheight = $(".pvbanner").height();
// console.log($pvheight);
// $pvbanner.css("opacity", 1- $(window).scrollTop() / $pvheight);
//
//
//
//

// //text scroll

// var lastScrollTop = 0;
// var alu = 10;

// $(window).scroll(function() {

//   var top_of_element = $("#parallax1").offset().top,
//        st = $(this).scrollTop();
//   var initialYOffset = window.pageYOffset;

//   var bottom_of_element = $("#parallax1").offset().top + 	$("#parallax1").height();

//   var bottom_of_screen = $(window).scrollTop() + window.innerHeight;

//   var top_of_screen = $(window).scrollTop();

//   if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){

//     if (st > lastScrollTop){
//         // console.log('down');
//         alu = alu - 0.3;
//     }
//     else if(st == lastScrollTop)
//     {
//       //do nothing
//       //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
//     }
//     else {
//         // console.log('up');
//         alu = alu + 0.2;
//     }
//     lastScrollTop = st;

//   $(".pvbanner-hero").css({"transform":"translateY("+alu+"px)"});
// }

//   else {
//   	$(".pvbanner-hero").css({"transform":"translateY(0px)"});
//   }

// });
