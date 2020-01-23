import React from 'react';
import { Link } from "react-router-dom";

import './Cards.css';


class Cards extends React.Component {


  render() {
    return (

      <div className="row">

          
          {this.props.items.map(
                  (item,index) =>
                      (
                        <div key={index} className="col-md-6 col-xl-4 card-con">
                        <div className="card booking-card">
                        
                          
                          <div className="view overlay">
                            <img className="card-img-top" src={"https://joeperpetua.me/projects/react-ecommerce/"+item.disp_pic} alt={"imagen de " + item.disp_brand + " " + item.disp_model}></img>
                            <a href="#!">
                              <div className="mask rgba-white-slight"></div>
                            </a>
                          </div>
                        
                          
                          <div className="card-body">
                        
                            
                            <h4 className="card-title font-weight-bold">{item.disp_brand} {item.disp_model}</h4>
                            

                            <strong><p className="mb-2">${item.product_price}</p></strong>
                            <p className="mb-2">Stock: {item.product_stock}</p>
                            
                  
                            <hr className="my-4"></hr>
                            <p className="lead"><strong>Especificaciones</strong></p>
                            <ul>
                              <li>
                                <div className="chip mr-0">{item.cpu_brand} {item.cpu_model}</div>
                              </li>
                              <li>
                                <div className="chip mr-0">{item.rom_size}GB ROM</div>
                              </li>
                              <li>
                                <div className="chip mr-0">{item.ram_size}GB RAM</div>
                              </li>
                              <li>
                                <div className="chip mr-0">{item.battery_capacity}mAh</div>
                              </li>
                            </ul>
                            
                            <Link to={"/projects/react-ecommerce/product?id_product="+item.id_product} className="btn btn-info btn-rounded">Ver mas detalles</Link>

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