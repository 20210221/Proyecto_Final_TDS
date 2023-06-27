import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Home(){

    useEffect(()=>{});

    return(<>
    
    <div className="main">

        <div className="header">
            <div className="logo"><h1><span className="icon-bus"/> INTRANSIT</h1></div>
        </div>

        <div className="section">

        <Link to="https://intransit-pasajeros.netlify.app/">
        <div className="item-section">
            <span class="icon-man-woman"></span>
            <h1>Portal Pasajeros</h1>
            </div>
        </Link>

        <Link to="https://intransit-choferes.netlify.app/">
        <div className="item-section">
            <span class="icon-users"></span>
            <h1>Portal Choferes</h1>
            </div>
        </Link>

        <Link to="https://intransit-admin.netlify.app/">
        <div className="item-section">
            <span class="icon-user-tie"></span>
            <h1>Portal Administrador</h1>
            </div>
        </Link>

        </div>


    <div className="footer">
    <div className="logo"><h1><span className="icon-bus"/> INTRANSIT</h1><h6>©</h6></div>  
    </div>

    </div>
    
    
    
    </>);
}