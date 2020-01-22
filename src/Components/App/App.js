import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';
import Main from './Main/Main.js';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      hideItems: false,

      texto:"exoPhone",
      links:[{text:"Inicio", src:"/"}, {text:"About", src:"/about"}],
      color:"green",
    };
  }

  componentDidMount () {
    fetch('http://exoapi.000webhostapp.com/api/producto.php')
    .then(response => response.json())
    .then(data => {
      this.setState({
        items: data.response
      });
    })
    .catch(err => {
      console.log(err);
    })
    
  }
 
  render() {
    return (
    <div>
      <Header texto={this.state.texto} links={this.state.links} color={this.state.color} />
      <Main items={this.state.items} />      
      <Footer />
    </div>  
    );
  }
 }
export default App;
