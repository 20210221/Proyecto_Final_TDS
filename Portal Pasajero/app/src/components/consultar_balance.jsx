import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import QRCode from "react-qr-code";


export default function Consulta(){

    const [QR, setQR] = useState("");

    useEffect(()=>{
        
        const tranfer = document.getElementById("tranfer");
        const transfesection = document.getElementById("transfesection");
        const transfesaldo = document.getElementById("transfesaldo");
        const codesection = document.getElementById("codesection");
        const confirmtranfe = document.getElementById("confirmtranfe");
        const canceltranfe = document.getElementById("canceltranfe");


        tranfer.onclick = () =>{

            transfesection.style.display = "flex";

            transfesaldo.style.display = "flex";

            document.body.style.overflow = "hidden";


        }


        canceltranfe.onclick = () =>{

            transfesection.style.display = "none";

            transfesaldo.style.display = "none";

            document.body.style.overflow = "auto";

        }
    });

    return(<>
    
    <div className="main">

        <div className="header">
        <div className="logo"><h1><span className="icon-bus"/> INTRANSIT | </h1><h2>  Pasajero</h2></div>
        <div className="exit-section"> <Link to="https://intransit-portal.netlify.app/"><h1><span className="icon-exit"></span>Salir</h1></Link></div>
        </div>

        <div className="nav"><Link to="/"><h1> Home /</h1></Link> <Link to="/consultar_balance"><h1> Consultar Balance /</h1></Link></div>

        <div className="section">
           <div className="userSection">
            <div className="Infouser">
                <h1><span className="icon-profile"></span> Carnet de Viajero</h1>
           <label>Nombre:</label>
           <input readOnly type="text" />
           <label>ID:</label>
           <input readOnly type="text" />
           <label>Ruta:</label>
           <input readOnly type="text" />
            </div>
            <div className="Infosaldo">
                <h1><span className="icon-coin-dollar"></span> Balance de Viaje</h1>
           <label>Balance Total:</label>
           <input readOnly type="text" />
           <div id="tranfer" className="tranfer"> 
            <h1><span className="icon-users"></span> Transferir Balance</h1>
           </div>
           <div id="codesection" className="codesection">
           <QRCode value= {QR} size={256} bgColor="#282c34" fgColor="#fff" level="H" />
           </div>
            </div>
           </div>
        </div>

    <div className="footer">
    <div className="logo"><h1><span className="icon-bus"/> INTRANSIT</h1><h6>©</h6></div>  
    </div>
    </div>
    
    <div id="transfesection" className="transfesection"></div>

    <div id="transfesaldo" className="transfesaldo">
    <h1><span className="icon-users"></span> Transferir Balance</h1>

    <label>ID_Pasajero:</label>
    <input type="text" />

    <label>Balance Transferido:</label>
    <input type="number" />

        <div className="actionstransfesaldo">
            <div id="confirmtranfe" className="confirmtranfe"><h1><span className="icon-checkmark"></span> Confirmar</h1></div>
            <div id="canceltranfe" className="canceltranfe"><h1>Cancelar</h1></div>
        </div>


    </div> 
    
    </>);
}