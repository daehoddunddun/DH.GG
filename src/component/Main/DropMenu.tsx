import React from "react";

function DropMenu() {

  return (
      <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              Menu
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#!">DropMenu1</a>
              </li>
              <li>
                <a href="#!">DropMenu2</a>
              </li>
              <li>
                <a href="#!">DropMenu3</a>
              </li>
            </ul>
          </div>
  );
}

export default DropMenu;
