import React from 'react';

import Cards from "./Cards/Cards.js"
import './Home.css';

class Home extends React.Component {

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <h1>Filtros</h1>
                    </div>
                    <div className="col-md-10">
                        <Cards items={this.props.items} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;