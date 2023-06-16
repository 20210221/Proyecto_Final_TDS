import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Home(){

    useEffect(()=>{});

    return(<>
    
    <div className="main">

        <div className="header">
            <div className="logo"><h1><span className="icon-bus"/> INTRANSIT | </h1><h2>  Administrador</h2></div>
           <div className="exit-section"> <Link to="https://intransit-portal.netlify.app/"><h1><span className="icon-exit"></span>Salir</h1></Link></div>
        </div>

        <div className="nav"><Link to="/"><h1> Home /</h1></Link></div>

        <div className="section">

        <Link to="/pasajeros">
        <div className="item-section">
            <span class="icon-man-woman"></span>
            <h1>Pasajeros</h1>
            </div>
        </Link>

        <Link to="/choferes">
        <div className="item-section">
            <span class="icon-users"></span>
            <h1>Choferes</h1>
            </div>
        </Link>

        <Link to="/transacciones">
        <div className="item-section">
            <span class="icon-coin-dollar"></span>
            <h1>Transacciones</h1>
            </div>
        </Link>

        </div>


    <div className="footer">
    <div className="logo"><h1><span className="icon-bus"/> INTRANSIT</h1><h6>©</h6></div>  
    </div>

    </div>
    
    
    
    </>);
}