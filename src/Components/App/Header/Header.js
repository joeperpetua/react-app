import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';


class Header extends React.Component {
  


  onClick (event) {
    var btn = document.getElementById('nav-btn');
    if (btn.classList.contains('collapse')){
      btn.classList.remove('collapse');
      btn.classList.toggle('expand');
    }else if(btn.classList.contains('expand')){
      btn.classList.remove('expand');
      btn.classList.toggle('collapse');      
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Back to portfolio</a>
        <button onClick={event => this.onClick(event)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="nav-btn">
          <ul className="navbar-nav mr-auto">

            
            {console.log(this.props.links)}
            
            {
              this.props.links.map(
              (elemento,index) => (
                <li key={index} className="nav-item active">
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