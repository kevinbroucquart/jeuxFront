import React from 'react'

//Function Navbar
const Navbar = (props) => {
    return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
    Jeux
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Bâtiments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Flottes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Defenses</a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a href="#" className="btn btn-light">
                  Inscription
              </a>
          </li>
          <li className="nav-item">
              <a href="#" className="btn btn-dark">
                  Connexion
              </a>
          </li>
          <li className="nav-item">
              <a href="#" className="btn btn-danger">
                  Deconnexion
              </a>
          </li>
      </ul>
    </div>
  </nav> );
}
 
export default Navbar;