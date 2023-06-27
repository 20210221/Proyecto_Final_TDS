import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Home(){

    useEffect(()=>{});

    return(<>
    
    <div className="main">

        <div className="header">
        <div className="logo"><h1><span className="icon-bus"/> INTRANSIT | </h1><h2>  Choferes</h2></div>
        <div className="exit-section"> <Link to="https://intransit-portal.netlify.app/"><h1><span className="icon-exit"></span>Salir</h1></Link></div>
        </div>

        <div className="nav"><Link to="/"><h1> Home /</h1></Link></div>

        <div className="section">

        <Link to="/verificar_balance">
        <div className="item-section">
            <span class="icon-qrcode"></span>
            <h1>Verificar Balance</h1>
            </div>
        </Link>

        </div>


    <div className="footer">
    <div className="logo"><h1><span className="icon-bus"/> INTRANSIT</h1><h6>©</h6></div>  
    </div>

    </div>
    
    
    
    </>);
}