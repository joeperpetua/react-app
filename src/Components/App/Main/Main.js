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
            <Route exact path="/projects/react-ecommerce" render={(props) => <Home {...props} items={this.props.items} />} />
            <Route exact path="/projects/react-ecommerce/product" render={(props) => <Product {...props} items={this.props.items} />} />
            <Route path="/projects/react-ecommerce/about" component={About} />
          </Switch>

        );
    }
    
}


export default Main;