jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
  }
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
  }
};
jQuery.event.special.wheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("wheel", handle, { passive: true });
  }
};
jQuery.event.special.mousewheel = {
  setup: function (_, ns, handle) {
    this.addEventListener("mousewheel", handle, { passive: true });
  }
};

$(document).ready(function () {
  $(".hero-slider").slick({
    infinite: !0,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: '<a class="slide-arrow prev-arrow"><i class="fas fa-chevron-circle-left"></i></a>',
    nextArrow: '<a class="slide-arrow next-arrow"><i class="fas fa-chevron-circle-right"></i></a>',
    responsive: [{
      breakpoint: 1600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  }), $(".slide-arrow").on("click", function () {
    $("img.lazy").lazy({
      bind: "event"
    })
  }), $(".hero-item").on("click", function () {
    var t = $(this).data("target"),
      e = $(this).data("spine"),
      i = $(this).data("target"),
      n = $(this).data("animation");
    $("#hero-selection").removeAttr("class"), $(".hero-item").removeClass("active"), $(this).addClass("active"), $(".hero-tabs .hero-card").fadeOut("fast", function () {
      $(this).removeClass("active")
    }), $(".hero-tabs").find("#" + t).fadeIn("fast", function () {
      $(this).addClass("active")
    }), $("#hero-selection").addClass(t), $("img.lazy").lazy({
      bind: "event"
    }), new spine.SpinePlayer(i + "-container", {
      jsonUrl: "assets/js/spine/" + e + ".json",
      atlasUrl: "assets/js/spine/" + e + ".atlas",
      alpha: !0,
      backgroundColor: "#00000000",
      animation: n ? "animation" : "run",
      showControls: !1
    })
  }), $("header a").on("click", function (t) {
    var e;
    "" !== this.hash && (t.preventDefault(), e = this.hash, $("html, body").animate({
      scrollTop: $(e).offset().top
    }, 800, function () {
      window.location.hash = e
    }))
  }), $(".toggle-menu").on("click", function (t) {
    t.preventDefault(), $(".nav-mobile").toggleClass("show")
  }), $(document).on("click", function (t) {
    0 === $("header").has(t.target).length && $(".nav-mobile").removeClass("show")
  }), AOS.init({
    duration: 1e3
  }), $(".lazy").lazy({
    youtubeLoader: function (t) {
      var e = $("<iframe />");
      e.attr("width", 560), e.attr("height", 315), e.attr("frameborder", 0), e.attr("allowfullscreen", ""), e.addClass("video"), e.attr("src", "https://www.youtube.com/embed/" + t.data("video")), t.append(e).load()
    }
  })

  const videoContainer = document.querySelector(".video-container");

  videoContainer.addEventListener("click", function () {
    const lazyLoadingChild = document.querySelector(".lazy-loading-content");

    videoContainer.removeChild(lazyLoadingChild);

    const responsiveDiv = document.createElement("div");

    // classes from bootstrap
    responsiveDiv.classList.add("embed-responsive", "embed-responsive-16by9");

    const iFrame = document.createElement("iframe");

    iFrame.classList.add("embed-responsive-item");

    iFrame.src = "https://www.youtube.com/embed/J-Ao3SL7dDk?playlist=J-Ao3SL7dDk&autoplay=1&loop=1&mute=1";

    responsiveDiv.appendChild(iFrame);

    videoContainer.appendChild(responsiveDiv);
  });
  $(window).on('load', function () {
    let isLoaded = false
    $(window).scroll(function (event) {
      if (!isLoaded) {
        isLoaded = true
        setTimeout(function () {
          new spine.SpinePlayer("ciara-container", {
            jsonUrl: "assets/js/spine/spine.json",
            atlasUrl: "assets/js/spine/spine.atlas",
            alpha: !0,
            backgroundColor: "#00000000",
            animation: "run",
            showControls: !1,
            success: function (t) {
              $(".hero-image").addClass("show")

              // setTimeout(() => {
              //   $(".hero-image").addClass("show")
              // }, 2e3)
            }
          })
        }, 3000)
        
        $('#microsoft-mesh').append('<video class="lazy" src="https://fota-landingpage.azureedge.net/assets/microsoft-mesh.mp4" muted autoplay loop playsinline></video>')
      }
      // Do something
    });
  });
});
