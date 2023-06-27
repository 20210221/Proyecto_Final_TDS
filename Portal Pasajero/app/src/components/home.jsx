import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Home(){

    useEffect(()=>{});

    return(<>
    
    <div className="main">

        <div className="header">
        <div className="logo"><h1><span className="icon-bus"/> INTRANSIT | </h1><h2>  Pasajeros</h2></div>
        <div className="exit-section"> <Link to="https://intransit-portal.netlify.app/"><h1><span className="icon-exit"></span>Salir</h1></Link></div>
        </div>

        <div className="nav"><Link to="/"><h1> Home /</h1></Link></div>

        <div className="section">

        <Link to="/consultar_balance">
        <div className="item-section">
            <span className="icon-qrcode"></span>
            <h1>Consultar Balance</h1>
            </div>
        </Link>

        <Link to="/recargar_balance">
        <div className="item-section">
            <span className="icon-credit-card"></span>
            <h1>Recargar Balance</h1>
            </div>
        </Link>

        </div>


    <div className="footer">
    <div className="logo"><h1><span className="icon-bus"/> INTRANSIT</h1><h6>©</h6></div>  
    </div>

    </div>
    
    
    
    </>);
}