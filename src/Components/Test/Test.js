import React from 'react';



class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount () {
    fetch('http://localhost/e-commerce/api/producto.php')
    .then(response => response.json())
    .then(data => {
      this.setState({
        items: data.response
      });
    })
    .catch(err => {
      console.log(err);
    })
    if (this.state.items) {
      console.log('dou');
    }else{
      console.log("manito");
    }
  }
  
  onClick (event) {
    console.log(event.target.value)
  }


  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-2">
            <h1>Filtros</h1>
          </div>

          <div class="container bootstrap snipets">
                            <h1 class="text-center text-muted">Product catalog</h1>
                            <div class="row flow-offset-1">                       
                {this.state.items.map(
                        (item,index) =>
                            (
                                <div class="col-xs-6 col-md-4">
                                    <div class="product tumbnail thumbnail-3"><a href="#"><img src="http://static.livedemo00.template-help.com/wt_58434/images/shop-1.jpg" alt=""></img></a>
                                        <div class="caption">
                                        <h6><a href="#">Short Sleeve T-Shirt</a></h6><span class="price">
                                            <del>$24.99</del></span><span class="price sale">$12.49</span>
                                        </div>
                                    </div>
                                    </div>
                        
                            )
                        )
                }
          </div>
        </div>
      </div>
      </div> 

  );
  }
 }
export default Test;


