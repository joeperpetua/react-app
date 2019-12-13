import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">{this.props.texto}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            
            {console.log(this.props.links)}
            
            {
              this.props.links.map(
              (elemento,index) => (
                <li className="nav-item active">
                  <Link to={elemento.src} className="nav-link">{elemento.text}</Link>
                </li>
              )
            )} 

          
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
 }
export default Header;