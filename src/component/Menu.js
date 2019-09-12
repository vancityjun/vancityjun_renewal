import React, { Component } from "react";
import $ from "jquery";
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
        <ul className="scrollWrap">
          <li>
            <a className="link" href="#">
              About
            </a>
          </li>
          {menuLists}
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
