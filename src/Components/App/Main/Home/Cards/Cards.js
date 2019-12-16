import React from 'react';

import './Cards.css';


class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  
  
  onClick (event) {
    window.open('http://react-app.joeperpetua.me/product?id_product='+event.target.value, "_self");
    console.log(event.target.value)
  }


  render() {
    return (

      <div className="row">

          
          {this.props.items.map(
                  (item,index) =>
                      (
                        <div className="col">
                        <div class="card booking-card">
                        
                          
                          <div class="view overlay">
                            <img class="card-img-top" src={"http://localhost/e-commerce/"+item.disp_pic} alt="Card image cap"></img>
                            <a href="#!">
                              <div class="mask rgba-white-slight"></div>
                            </a>
                          </div>
                        
                          
                          <div class="card-body">
                        
                            
                            <h4 class="card-title font-weight-bold"><a>{item.disp_brand} {item.disp_model}</a></h4>
                            

                            <strong><p class="mb-2">${item.product_price}</p></strong>
                            <p class="mb-2">Stock: {item.product_stock}</p>
                            
                  
                            <hr class="my-4"></hr>
                            <p class="lead"><strong>Especificaciones</strong></p>
                            <ul>
                              <li>
                                <div class="chip mr-0">{item.cpu_brand} {item.cpu_model}</div>
                              </li>
                              <li>
                                <div class="chip mr-0">{item.rom_size}GB ROM</div>
                              </li>
                              <li>
                                <div class="chip mr-0">{item.ram_size}GB RAM</div>
                              </li>
                              <li>
                                <div class="chip mr-0">{item.battery_capacity}mAh</div>
                              </li>
                            </ul>
                            
                            <button type="button" class="btn btn-info btn-rounded" value={item.id_product}
                              onClick={event => this.onClick(event)}>Ver mas detalles</button>
                        
                          </div>
                        
                        </div>
                        </div>
                  
                    )
                  )
          }

</div>
          
        
    

  );
  }
 }
export default Cards;