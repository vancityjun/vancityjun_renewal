import React from "react";

const Menu = props => {
  const menuLists = props.projects.map((project, i) => {
    return (
      <li key={i}>
        <a className="link" href="# ">
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
            <a className="link" href="# ">
              About
            </a>
          </li>
          {menuLists}
        </ul>
        {/*          <div className="info mobile">
              <p><a href="mailto:vancityjun@gmail.com">vancityjun@gmail.com</a>
              </p>
            </div>
              */}
      </div>
      <div className="imageWrapper">
        <div className="preview"></div>
      </div>
    </div>
  );
};

export default Menu;
