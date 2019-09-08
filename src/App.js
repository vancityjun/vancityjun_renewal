import React, { Component } from "react";
import "./App.scss";
// import { TweenMax, TweenLite } from "gsap/TweenMax";
import $ from "jquery";
import Swiper from "swiper";
// import Swiper from "swiper/dist/js/swiper.esm.bundle";
import "swiper/dist/css/swiper.min.css";
// import { extname } from "path";
import Topbar from "./component/Topbar.js";
import Menu from "./component/Menu.js";
import Profile from "./component/Profile.js";
import Slide from "./component/Slide.js";
import { projects } from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.slidehandler = this.slidehandler.bind(this);
    this.state = {
      swiper: ""
    };
  }
  componentDidMount() {
    const swiper = new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade", //fade slide
      loop: true,
      preventClicks: false,
      preventClicksPropagation: false,
      // hashNavigation:true,
      mousewheel: {
        sensitivity: 3
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      // autoHeight: true,
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".blog-button-next",
        prevEl: ".blog-button-prev"
      },
      direction: "vertical"
    });
    this.setState({ swiper });
    $(".toggle-menu").click(function() {
      $(this).toggleClass("active");
      $(".menu").fadeToggle(600);
    });

    $(function() {
      // $('.top_bar').midnight();
      function contentOpen() {
        $(".swiper-slide-active")
          .find(".content_wrapper")
          .css("right", "-45%");
        var htmlWidth = window.innerWidth;
        if (htmlWidth <= 576) {
          $(".swiper-slide-active")
            .find(".content_wrapper")
            .css("right", "-100%");
        }
        $(".swiper-slide-active")
          .find(".blog-slider__img")
          .css("right", "0px");
        $(".swiper-slide")
          .find(".videoWrapper")
          .css("display", "block");
        $(".closeBtn").fadeIn(600);
        $(".swiper-slide-active")
          .find(".project-info")
          .addClass("active");
        if (htmlWidth > 576) {
          $(".swiper-slide-active")
            .find(".scrollDown")
            .fadeIn(600);
        }
        $(".swiper-slide-active")
          .find(".project-content")
          .addClass("active");
        $(".swiper-slide-active")
          .find(".info-background")
          .fadeIn("600");
        $(".blog-slider__pagination").fadeOut(400);
        $(".arrows").fadeOut(400);
        $(".swiper-wrapper").addClass("swiper-no-swiping");
        swiper.mousewheel.disable();
        swiper.keyboard.disable();
        $(".swiper-slide-active").addClass("scroll");
        $(".scroll").animate(
          {
            scrollTop: 0
          },
          0
        );
      }
      /* VIEW CASE BUTTON */
      $(".blog-slider__button").on("click", function(e) {
        e.preventDefault();
        contentOpen();
      });

      $(".swiper-slide")
        .find(".info-background")
        .css("display", "none");

      function contentClose(fod) {
        $(".scroll").animate(
          {
            scrollTop: 0
          },
          400
        );
        $(".swiper-slide").removeClass("scroll");
        $(".swiper-slide")
          .find(".content_wrapper")
          .css("right", "0px");
        $(".swiper-slide")
          .find(".videoWrapper")
          .css("display", "none");
        $(".swiper-slide")
          .find(".blog-slider__img")
          .css("right", "300px");
        $(".closeBtn").fadeOut(600);
        $(".swiper-slide")
          .find(".project-info")
          .removeClass("active");
        $(".swiper-slide")
          .find(".scrollDown")
          .fadeOut(fod);
        $(".swiper-slide")
          .find(".project-content")
          .removeClass("active");
        $(".swiper-slide")
          .find(".info-background")
          .fadeOut(fod);
        $(".blog-slider__pagination").fadeIn(fod);
        $(".arrows").fadeIn(fod);
        $(".swiper-wrapper").removeClass("swiper-no-swiping");
        swiper.mousewheel.enable();
        swiper.keyboard.enable();
      }
      /* CLOSE BUTTON */
      $(".closeBtn").on("click", function(e) {
        e.preventDefault();
        contentClose(400);
      });

      $(".menu a").click(function(e) {
        e.preventDefault();
        $(".toggle-menu").removeClass("active");
        $(".menu").fadeOut(600);
        contentClose(400);
      });

      $(".scrollDown").on("click", function(e) {
        e.preventDefault();
        $(".scroll").animate(
          {
            scrollTop: $(".project-content").offset().top
          },
          500,
          "linear"
        );
      });
    });
    //menu onclick
    $(".link").on("click", function(e) {
      e.preventDefault();
      var i = $(".link").index($(this)) + 1;
      swiper.slideTo(i);
    });
    var backgrounds = [
      "jun",
      "furence",
      "renewal",
      "itsm",
      "shiba",
      "recsee-video",
      "award"
    ];
    function menuActive() {
      var i = $(".swiper-pagination-bullet").index(
        $(".swiper-pagination-bullet-active")
      );
      $(".preview").css(
        "background-image",
        "url('./img/" + backgrounds[i] + ".png')"
      );
      $(".menuWrapper ul li:eq(" + i + ")")
        .find(".link")
        .addClass("active");
      $(".menuWrapper ul li:eq(" + i + ")")
        .siblings()
        .find(".link")
        .removeClass("active");
    }

    $(".menuWrapper ul li").mouseenter(function() {
      var i = $(".menuWrapper ul li").index(this);
      $(".preview").css(
        "background-image",
        "url('img/" + backgrounds[i] + ".png')"
      );
    });

    $(".menuWrapper ul li").mouseleave(function() {
      var i = $(".swiper-pagination-bullet").index(
        $(".swiper-pagination-bullet-active")
      );
      $(".preview").css(
        "background-image",
        "url('img/" + backgrounds[i] + ".png')"
      );
    });

    swiper.on("slideChange", function() {
      menuActive();
    });

    $(".btnDesktop").on("click", function(e) {
      e.preventDefault();
      $(this).addClass("active");
      $(this)
        .siblings()
        .removeClass("active");

      $(this)
        .closest(".project-content")
        .find(".desktop")
        .fadeIn(400);
      $(this)
        .closest(".project-content")
        .find(".mobile")
        .fadeOut(400);
    });
    $(".btnMobile").on("click", function(e) {
      e.preventDefault();
      $(this).addClass("active");
      $(this)
        .siblings()
        .removeClass("active");

      $(this)
        .closest(".project-content")
        .find(".mobile")
        .fadeIn(400);
      $(this)
        .closest(".project-content")
        .find(".desktop")
        .fadeOut(400);
    });

    $(document).ready(function() {
      menuActive();
    });
  }
  slidehandler(i) {
    this.swiper.slideTo(i);
  }
  render() {
    const slides = projects.map((projects, i) => {
      return (
        <Slide
          key={i}
          id={i}
          title={projects.title}
          category={projects.category}
          background={projects.background}
          date={projects.date}
          description={projects.description}
          url={projects.url}
          pc={projects.pc}
          mobile={projects.mobile}
          customContent={projects.customContent}
        />
      );
    });
    return (
      <div className="App">
        <div className="wrapper">
          <Topbar />
          <Menu projects={projects} />
          <div className="blog-slider">
            <div className="blog-slider__wrp swiper-wrapper">
              <Profile />
              {slides}
            </div>
            <div className="arrows">
              <div className="navigation blog-button-prev">prev</div>
              <span className="space"></span>
              <div className="navigation blog-button-next">next</div>
            </div>
            <div className="blog-slider__pagination"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
