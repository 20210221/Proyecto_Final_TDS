import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Verificar(){

    useEffect(()=>{});

    return(<>
    
    <div className="main">

        <div className="header">
        <div className="logo"><h1><span className="icon-bus"/> INTRANSIT | </h1><h2>  Chofer</h2></div>
        <div className="exit-section"> <Link to="https://intransit-portal.netlify.app/"><h1><span className="icon-exit"></span>Salir</h1></Link></div>
        </div>

        <div className="nav"><Link to="/"><h1> Home /</h1></Link> <Link to="/verificar_balance"><h1> Verificar Balance /</h1></Link></div>

        <div className="section">
           
        </div>


    <div className="footer">
    <div className="logo"><h1><span className="icon-bus"/> INTRANSIT</h1><h6>©</h6></div>  
    </div>

    </div>
    
    
    
    </>);
}