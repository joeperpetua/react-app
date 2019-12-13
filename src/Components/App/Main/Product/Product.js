import React from 'react';

import "./Product.css";


class Product extends React.Component {
    constructor(props){
        super(props);
        this.state={
            producto:[]
        }
    }

    

    componentDidMount () {
        var url = 'http://localhost/e-commerce/api/producto.php'+window.location.search;
        fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            producto: data.response
          });
          
        })
        .catch(err => {
          console.log(err);
        })
        
      }

    render(){
        return(
        <div>
            {this.state.producto.map(
                  (elemento,index) =>
                      (
                        <div>
                        <div className="section product-header">
                            <div className="container">
                            <div className="columns">
                                <div className="column">
                                <span className="title is-3">{elemento.disp_brand} {elemento.disp_model}</span>
                                <span className="title is-3 has-text-muted">&nbsp;|&nbsp;</span>
                                <span className="title is-4 has-text-muted">{elemento.cat}</span>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="section">
                            <div className="container">
                            <div className="columns">
                                <div className="column is-6">
                                <div className="image is-2by2">
                                    <img src={"http://localhost/e-commerce/"+elemento.disp_pic}></img>
                                </div>
                                </div>
                                <div className="column is-5 is-offset-1">
                                <div className="title is-2">{elemento.disp_brand} {elemento.disp_model}</div>
                                <p className="title is-3 has-text-muted">${elemento.product_price}</p>
                                <hr></hr>
                                <br></br>
                                
                                <br></br>
                                <p>Suspendisse sodales metus justo, ullamcorper iaculis purus interdum in. Sed ultricies enim felis, in interdum urna malesuada a. Morbi id ligula vel leo elementum dignissim quis vel purus. Donec iaculis, est ac maximus vestibulum, sapien mi lacinia urna, at laoreet felis lectus nec urna. Fusce egestas, neque vitae blandit scelerisque, leo arcu pellentesque risus, et volutpat neque nunc id massa. Aenean dapibus leo vel purus malesuada, eu ultrices nulla consequat. Duis erat orci, lobortis sed dictum id, pretium a nibh. Mauris pharetra ligula consequat gravida ornare.
                                </p>
                                <br></br>
                                <br></br>
                                <p className="">
                                    
                                    &nbsp;
                                    <input type="text" name="" className="input has-text-centered" value="1"></input>
                                    &nbsp;
                                    
                                    &nbsp; &nbsp; &nbsp;
                                    <a className="button is-primary">Add to cart</a>
                                </p>
                                <br></br>
                               
                                </div>
                            </div>
                            </div>
                        </div>
                        

                        <div className="section">
                            <div className="container">
                            <div className="tabs">
                                <ul>
                                <li className="is-active"><a>Especificaciones</a></li>
                                
                                </ul>
                            </div>
                            <div className="box">

                            <ul>
                                <b><li>Datos del dispositivo</li></b>
                            </ul>
                            <ul>
                                <li>Codigo de modelo: { elemento.disp_code }</li>
                                <li>S.O: { elemento.disp_so } { elemento.disp_so_version }</li>
                                <li>Color: { elemento.disp_color }</li>
                                <li>Anio: { elemento.disp_year }</li>
                            </ul>

                            <br></br>
                            <ul>
                            <b><li>Unidades de procesamiento</li></b>
                            </ul>
                            <ul>
                                <li>CPU: { elemento.cpu_brand } { elemento.cpu_model }</li>
                                <li>Nucleos: { elemento.cpu_cores }</li>
                                <li>GPU: { elemento.gpu_brand } { elemento.gpu_model }</li>
                            </ul>

                            <br></br>
                            <ul>
                            <b><li>Pantalla</li></b>
                            </ul>
                            <ul>
                                <li>Tamanio: { elemento.screen_size }"</li>
                                <li>Resolucion: { elemento.screen_reso }</li>
                                <li>Tipo: { elemento.screen_type }</li>
                                <li>Relacion aspecto: { elemento.screen_aspect_ratio }</li>
                            </ul>

                            <br></br>
                            <ul>
                            <b><li>Memoria</li></b>
                            </ul>
                            <ul>
                                <li>Ram: { elemento.ram_size }GB</li>
                                <li>Rom: { elemento.rom_size }GB</li>
                                <li>SD (max): { elemento.sd_size }GB</li>
                            </ul>

                            <br></br>
                            <ul>
                            <b><li>Bateria</li></b>
                            </ul>
                            <ul>
                                <li>Tipo: { elemento.battery_type }</li>
                                <li>Capacidad: { elemento.battery_capacity }mAh</li>
                                <li>Carga rapida: { elemento.battery_qc }</li>
                                <li>Carga inalambrica: { elemento.battery_wc }</li>
                            </ul>

                            <br></br>
                            <ul>
                            <b><li>Conectividad</li></b>
                            </ul>
                            <ul>
                                <li>Tipo SIM: { elemento.sim_type }</li>
                                <li>Tipo USB: { elemento.usb_type }</li>
                                <li>NFC: { elemento.has_nfc }</li>
                                <li>IRC: { elemento.has_irc }</li>
                                <li>LTE: { elemento.has_lte }</li>
                            </ul>

                            <br></br>
                            <ul>
                            <b> <li>Camaras</li></b>
                            </ul>
                            <ul>
                                <li>{ elemento.a }</li>
                            </ul>

                            <br></br>
                            <ul>
                            <b> <li>Extras</li></b>
                            </ul>
                            <ul>
                                <li>Lector dactilar: { elemento.fingerprint_type }</li>
                                <li>Audio: { elemento.speaker_type }</li>
                                <li>Resistencia al agua: { elemento.water_resistant_grade }</li>
                                <li>Jack 3.5mm: { elemento.has_headphone_jack }</li>
                            </ul>

                            </div>
                        </div>
                        </div>
                        </div>
                  
                    )
                  )}
            </div>
            
        );
    }
}

export default Product;