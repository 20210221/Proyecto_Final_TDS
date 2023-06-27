import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Transacciones(){

    useEffect(()=>{

        let CreateUserSection = document.getElementById("CreateUserSection");
        let createUsers = document.getElementById("createUsers");
        let NameCreateUser = document.getElementById("NameCreateUser");
        let IDCreateUser = document.getElementById("IDCreateUser");
    

    
    
        });
    
        return(<>
        
        <div className="main">
    
            <div className="header">
            <div className="logo"><h1><span className="icon-bus"/> INTRANSIT | </h1><h2>  Administrador</h2></div>
            <div className="exit-section"> <Link to="https://intransit-portal.netlify.app/"><h1><span className="icon-exit"></span>Salir</h1></Link></div>
            </div>
    
            <div className="nav"><Link to="/"><h1> Home /</h1></Link> <Link to="/transacciones"><h1> Transacciones /</h1></Link></div>
    
            <div className="section">
              <div className="tools">
                <div className="SearchSection">
                  <input placeholder="Buscar Transacción..." type="text" />
                  <span className="icon-sort-amount-desc">
                  <div className="filterSection">
                    <div className="fliteritem"><h1>Filtrar por Nombre</h1></div>
                    <div className="fliteritem"><h1>Filtrar por Ruta</h1></div>
                    <div className="fliteritem"><h1>Filtrar por Tipo</h1></div>
                    <div className="fliteritem"><h1>Filtrar por Fecha</h1></div>
                    <h1></h1>
                    <h1></h1>
                  </div>
                  </span>
                </div>
                <div className="newUser excel"><span className="icon-file-excel"></span><h1>Descargar Informe</h1></div>
              </div>
              <div className="tableusers">
                <div className="columns">
                  <h1>ID_Pasajero</h1>
                  <h1>Nombre</h1>
                  <h1>Ruta</h1>
                  <h1>Tipo</h1>
                  <h1>Fecha</h1>
                </div>
                <div className="rows selectedRow">
                <h1>ID_Pasajero</h1>
                  <h1>Nombre</h1>
                  <h1>Ruta</h1>
                  <h1>Tipo</h1>
                  <h1>Fecha</h1>
                </div>
                <div className="rows selectedRow">
                <h1>ID_Pasajero</h1>
                  <h1>Nombre</h1>
                  <h1>Ruta</h1>
                  <h1>Tipo</h1>
                  <h1>Fecha</h1>
                </div>
                <div className="rows selectedRow">
                <h1>ID_Pasajero</h1>
                  <h1>Nombre</h1>
                  <h1>Ruta</h1>
                  <h1>Tipo</h1>
                  <h1>Fecha</h1>
                </div>
                <div className="rows selectedRow">
                <h1>ID_Pasajero</h1>
                  <h1>Nombre</h1>
                  <h1>Ruta</h1>
                  <h1>Tipo</h1>
                  <h1>Fecha</h1>
                </div>
                <div className="rows selectedRow">
                <h1>ID_Pasajero</h1>
                  <h1>Nombre</h1>
                  <h1>Ruta</h1>
                  <h1>Tipo</h1>
                  <h1>Fecha</h1>
                </div>
              </div>
            </div>
        <div className="footer">
        <div className="logo"><h1><span className="icon-bus"/> INTRANSIT</h1><h6>©</h6></div>  
        </div>
        </div>
        
        <div id="CreateUserSection" className="CreateUserSection"></div>
    
        <div id="createUsers" className="createUsers">
          <h1><span className="icon-users"></span> Nuevo Pasajero</h1>
        <label>Nombre</label>
        <input id="NameCreateUser" type="text" />
        <label>ID</label>
        <input id="IDCreateUser" type="text" />
        <label>Ruta</label>
        <select id="SelectRutaCreateUsers" name="select">
        <option selected value="NONE">Ninguna</option>
      <option value="(27) Pintura-ITLA">(27) Pintura - ITLA</option>
      <option value="(Charles) Villa Mella-ITLA">(Charles) Villa Mella - ITLA</option>
      <option value="(Este) San Pedro-ITLA">(Este) San Pedro - ITLA</option>
    </select>
    <span className="icon-circle-down"></span>
        <label>Balance</label>
        <input id="SaldoCreateUser" min={0} type="number" />
    
        <div className="actionscreateusers">
          <div id="AddCreateUser" className="AddUser"><h1><span className="icon-user-check"></span> Agregar</h1></div>
          <div id="CancelCreateUser" className="canceluser"><h1>Cancelar</h1></div>
        </div>
        </div>
    
        
        </>);
}