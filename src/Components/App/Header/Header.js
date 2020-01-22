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
        <a className="navbar-brand" href="/">Back to portfolio</a>
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
                  <Link to={"/projects/react-ecommerce" + elemento.src} className="nav-link">{elemento.text}</Link>
                </li>
              )
            )} 

          
          </ul>
          
        </div>
      </nav>
    );
  }
 }
export default Header;