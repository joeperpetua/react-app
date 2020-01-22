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
      
      <footer class="page-footer font-small stylish-color-dark pt-4">

        


     
        
        <ul class="list-unstyled list-inline text-center">  
          <li class="list-inline-item"> <a href="https://www.linkedin.com/in/joel-p-10ab3911a/" class="btn-floating btn-li mx-1"> <i class="fab fa-linkedin-in"> </i> </a> </li>
          <li class="list-inline-item"> <a href="https://www.github.com/joeperpetua" class="btn-floating btn-li mx-1"> <i class="fab fa-github"> </i> </a> </li>
        </ul>

        <div class="footer-copyright text-center py-3">Made by: &nbsp;  <a href="https://joeperpetua.me">Joel Perpetua</a></div>

      </footer>

    );
  }
 }
export default Footer;