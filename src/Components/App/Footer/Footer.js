import React from 'react';
import './Footer.css';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ""
    };
  }
  render() {
    return (
      
      <footer className="page-footer font-small stylish-color-dark pt-4">

        


     
        
        <ul className="list-unstyled list-inline text-center">  
          <li className="list-inline-item"> <a href="https://www.linkedin.com/in/joel-p-10ab3911a/" className="btn-floating btn-li mx-1"> <i className="fab fa-linkedin-in"> </i> </a> </li>
          <li className="list-inline-item"> <a href="https://www.github.com/joeperpetua" className="btn-floating btn-li mx-1"> <i className="fab fa-github"> </i> </a> </li>
        </ul>

        <div className="footer-copyright text-center py-3">Made by: &nbsp;  <a href="https://joeperpetua.me">Joel Perpetua</a></div>

      </footer>

    );
  }
 }
export default Footer;