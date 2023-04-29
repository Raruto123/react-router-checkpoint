import React from 'react'

function NavBar() {
  return (
    <header className="miabox-nav-bg-color">
      <nav className="container  py-4">
        <div className="d-sm-none d-none d-md-flex flex-row justify-content-between align-items-center ">
          <a href="#empty" className="text-white active">
            Tout
          </a>
          <a href="#empty" className="text-white">
            Action
          </a>
          <a href="#empty" className="text-white">
            Fantastique
          </a>
          <a href="#empty" className="text-white">
            Romantique
          </a>
          <a href="#empty" className="text-white">
            Drame
          </a>
          <div>
            <ul className="nav nav-pills">
              <li className="nav-item dropdown">
                <a
                  className="dropdown-toggle text-white"
                  data-bs-toggle="dropdown"
                  href="#empty"
                  role="button"
                  aria-expanded="false"
                >
                  Comique
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#empty">
                      Sean bridon
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#empty">
                      Sean bridon
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#empty">
                      Sean bridon
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-sm-block d-md-none">
          <button>
            <span>
              <i className="fas fa-bars"></i>
            </span>
          </button>
        </div>

        <div className="d-md-none  p-4 miabox-nav-bg-color xs-row-to-column">
          <div
            className="d-flex flex-column mr-5"
            style={{ marginRight: "30px" }}
          >
            <a href="#empty" className="text-white">
              Action
            </a>
            <a href="#empty" className="text-white">
              Fantastique
            </a>
            <a href="#empty" className="text-white">
              Drame
            </a>
            <a href="#empty" className="text-white">
              Comique
            </a>
          </div>

          <div
            className="d-flex flex-column mr-5"
            style={{ marginRight: "30px" }}
          >
            <a href="#empty" className="text-white">
              Action
            </a>
            <a href="#empty" className="text-white">
              Fantastique
            </a>
            <a href="#empty" className="text-white">
              Drame
            </a>
            <a href="#empty" className="text-white">
              Comique
            </a>
          </div>

          <div
            className="d-flex flex-column mr-5"
            style={{ marginRight: "30px" }}
          >
            <a href="#empty" className="text-white">
              Action
            </a>
            <a href="#empty" className="text-white">
              Fantastique
            </a>
            <a href="#empty" className="text-white">
              Drame
            </a>
            <a href="#empty" className="text-white">
              Comique
            </a>
          </div>

          <div className="d-flex flex-column">
            <a href="#empty" className="text-white">
              Action
            </a>
            <a href="#empty" className="text-white">
              Fantastique
            </a>
            <a href="#empty" className="text-white">
              Drame
            </a>
            <a href="#empty" className="text-white">
              Comique
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar