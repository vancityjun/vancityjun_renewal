import React, { Component } from "react";

function Menu(props) {
  const menuLists = props.projects.map((project, i) => {
    return (
      <li>
        <a className="link" href="#">
          {project.title}
        </a>
      </li>
    );
  });

  return (
    <div className="menu" style={{ display: "none" }}>
      <div className="menuWrapper">
        <ul>
          <li>
            <a className="link" href="#">
              About
            </a>
          </li>
          {menuLists}
          {/* <li>
            <a className="link" onclick="swiper.slideTo(2)" href="#">
              Furence
            </a>
          </li>
          <li>
            <a className="link" onclick="swiper.slideTo(3)" href="#">
              Perry&amp;Sherry
            </a>
          </li>
          <li>
            <a className="link" onclick="swiper.slideTo(4)" href="#">
              ITSM
            </a>
          </li>
          <li>
            <a className="link" onclick="swiper.slideTo(5)" href="#">
              Sakura Park
            </a>
          </li>
          <li>
            <a className="link" onclick="swiper.slideTo(6)" href="#">
              RecSee
            </a>
          </li>
          <li>
            <a className="link" onclick="swiper.slideTo(7)" href="#">
              School Projects
            </a>
          </li> */}
        </ul>
        {/*          <div className="info mobile">
              <p><a href="tel:6043795391">(604) 379 5391</a></p>
              <p><a href="mailto:vancityjun@gmail.com">vancityjun@gmail.com</a>
              </p>
              <div className="sns">
                <a href="https://www.facebook.com/vancityjun"><i className="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/vancityjun"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
              */}
      </div>
      <div className="imageWrapper">
        <div className="preview"></div>
      </div>
    </div>
  );
}

export default Menu;
