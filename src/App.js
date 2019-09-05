import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Cards from './Components/Cards/Cards.js';
import Footer from './Components/Footer/Footer.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ""
    };
  }
  render() {
    return (
    <div>
      <Header />
      
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h1>Filtros</h1>
          </div>
          <div className="col-10">
              <Cards />
          </div>
        </div>
        </div>

      
      <Footer />
    </div>  
    );
  }
 }
export default App;
