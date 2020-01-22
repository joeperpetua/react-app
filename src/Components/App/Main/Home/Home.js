import React from 'react';

import Cards from "./Cards/Cards.js"

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h1>Filtros</h1>
                    </div>
                    <div className="col-10">
                        <Cards items={this.props.items} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;