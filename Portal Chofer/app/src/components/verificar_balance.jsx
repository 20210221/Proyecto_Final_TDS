import React,{ useEffect,useState  } from "react";

import { Link } from "react-router-dom";

import {QrReader} from "react-qr-reader";



export default function Verificar(){

    const [data, setData] = useState('No result');

    useEffect(()=>{

      
    });


    return(<>
    
    <div className="main">

        <div className="header">
        <div className="logo"><h1><span className="icon-bus"/> INTRANSIT | </h1><h2>  Chofer</h2></div>
        <div className="exit-section"> <Link to="https://intransit-portal.netlify.app/"><h1><span className="icon-exit"></span>Salir</h1></Link></div>
        </div>

        <div className="nav"><Link to="/"><h1> Home /</h1></Link> <Link to="/verificar_balance"><h1> Verificar Balance /</h1></Link></div>

        <div className="section">
        {/* <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p> */}
        </div>


    <div className="footer">
    <div className="logo"><h1><span className="icon-bus"/> INTRANSIT</h1><h6>©</h6></div>  
    </div>

    </div>
    
    
    
    </>);
}