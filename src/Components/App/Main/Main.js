import React from 'react';
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Product from "./Product/Product.js";




class Main extends React.Component{

    constructor(props) {
        super(props);
      }
    
    
    render(){
        return(
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} items={this.props.items} />} />
            <Route exact path="/product" render={(props) => <Product {...props} items={this.props.items} />} />
            <Route path="/about" component={About} />
          </Switch>

        );
    }
    
}


export default Main;