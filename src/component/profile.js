import React, { Component } from "react";

class profile extends Component {
  render() {
    return (
      <div class="blog-slider__item swiper-slide profile" data-hash="slide1">
        <div class="blog-slider__img">
          <div class="project-header" data-midnight="default"></div>
        </div>
        <div class="content_wrapper">
          <div class="blog-slider__content cf">
            {/*  <span class="blog-slider__code">Hello I'm</span>  */}
            <div class="blog-slider__title">Jun Lee</div>
            <div class="blog-slider__text">
              <q>
                I'm a front-end developer from Korea living in Vancouver.
                <br></br> I'd like to learn and discover new things every day to
                improve myself and am very adaptable.
              </q>
            </div>
            <div class="info">
              <p>
                <a href="tel:6043795391">(604) 379 5391</a>
              </p>
              <p>
                <a href="mailto:vancityjun@gmail.com">vancityjun@gmail.com</a>
              </p>
              <div class="sns">
                <a href="https://github.com/vancityjun" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/vancityjun"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                {/* <a href="https://www.facebook.com/vancityjun"><i class="fab fa-facebook-square"></i></a> */}
                {/*  <a href="https://www.instagram.com/vancityjun"><i class="fab fa-instagram"></i></a> */}
              </div>
            </div>
            {/* <a href="#" class="blog-slider__button">MORE</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default profile;
