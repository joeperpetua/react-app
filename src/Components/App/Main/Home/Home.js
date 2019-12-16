import React from 'react';

import Cards from "./Cards/Cards.js"

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4">
              <div className="col-2">
                <h1>Filtros</h1>
              </div>
              <div className="col">

                  <Cards items={this.props.items} />
              </div>
            </div>
            </div>
        );
    }
}

export default Home;