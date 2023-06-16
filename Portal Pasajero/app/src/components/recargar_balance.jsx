import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Recarga(){

    useEffect(()=>{});

    return(<>
    
    <div className="main">

        <div className="header">
        <div className="logo"><h1><span className="icon-bus"/> INTRANSIT | </h1><h2>  Pasajero</h2></div>
        <div className="exit-section"> <Link to="https://intransit-portal.netlify.app/"><h1><span className="icon-exit"></span>Salir</h1></Link></div>
        </div>

        <div className="nav"><Link to="/"><h1> Home /</h1></Link> <Link to="/recargar_balance"><h1> Recargar Balance /</h1></Link></div>

        <div className="section">
         
        </div>


    <div className="footer">
    <div className="logo"><h1><span className="icon-bus"/> INTRANSIT</h1><h6>©</h6></div>  
    </div>

    </div>
    
    
    
    </>);
}