import React from "react";

const Header = (props) => {
  return (
    <div className="workspace__header">
      <h2 className="header__title">{props.header}</h2>
    </div>
  );
};

export default Header;
