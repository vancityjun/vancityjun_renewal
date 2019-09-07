import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

class Profile extends Component {
  render() {
    return (
      <div
        className="blog-slider__item swiper-slide profile"
        data-hash="slide0"
      >
        <div className="blog-slider__img">
          <div className="project-header" data-midnight="default"></div>
        </div>
        <div className="content_wrapper">
          <div className="blog-slider__content cf">
            {/*  <span className="blog-slider__code">Hello I'm</span>  */}
            <div className="blog-slider__title">Jun Lee</div>
            <div className="blog-slider__text">
              <q>
                I'm a front-end developer from Korea living in Vancouver.
                <br></br> I'd like to learn and discover new things every day to
                improve myself and am very adaptable.
              </q>
            </div>
            <div className="info">
              <p>
                <a href="tel:6043795391">(604) 379 5391</a>
              </p>
              <p>
                <a href="mailto:vancityjun@gmail.com">vancityjun@gmail.com</a>
              </p>
              <div className="sns">
                <a href="https://github.com/vancityjun" target="_blank">
                  <i className="fab fa-github"></i>
                  <FontAwesomeIcon icon={["fab", "faGithub"]} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vancityjun"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                {/* <a href="https://www.facebook.com/vancityjun"><i className="fab fa-facebook-square"></i></a> */}
                {/*  <a href="https://www.instagram.com/vancityjun"><i className="fab fa-instagram"></i></a> */}
              </div>
            </div>
            {/* <a href="#" className="blog-slider__button">MORE</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
