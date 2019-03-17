import React from 'react';

const loggedUser = { name: "Hiren" };

const TopBar = props => (
    <div className="top-bar">
    <i className="icon fab fa-facebook-messenger" />
    <a
      onClick={props.toggleModal}
      className={`username ${props.userPosition || "left"}`}
    >
      {loggedUser.name}
    </a>
  </div>
)

export default TopBar;