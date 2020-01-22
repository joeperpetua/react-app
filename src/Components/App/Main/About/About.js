import React from 'react';

import './About.css';

class About extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container container-about">
                <h1>About</h1>
                <p>This is a quick ecommerce demo made with ReactJS and Bootstrap and BulmaCSS for the product page.</p>
            </div>
        );
    }
}

export default About;