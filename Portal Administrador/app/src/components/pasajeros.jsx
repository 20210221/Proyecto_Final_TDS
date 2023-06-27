import { useEffect } from "react";

import { Link } from "react-router-dom";

export default function Pasajeros(){

    useEffect(()=>{

    let newUser = document.getElementById("newUser");
    let CreateUserSection = document.getElementById("CreateUserSection");
    let createUsers = document.getElementById("createUsers");
    let NameCreateUser = document.getElementById("NameCreateUser");
    let IDCreateUser = document.getElementById("IDCreateUser");
    let EditteUsers = document.getElementById("EditteUsers");
    let NameEditUser = document.getElementById("NameEditUser");
    let IDEditteUser = document.getElementById("IDEditteUser");
    let SelectRutaCreateUsers = document.getElementById("SelectRutaCreateUsers");
    let SelectRutaEditUsers = document.getElementById("SelectRutaEditUsers");
    let SaldoCreateUser = document.getElementById("SaldoCreateUser");
    let SaldoEditteUser = document.getElementById("SaldoEditteUser");
    let AddCreateUser = document.getElementById("AddCreateUser");
    let CancelCreateUser = document.getElementById("CancelCreateUser");
    let AddEditUser = document.getElementById("AddEditUser");
    let CancelEditUser = document.getElementById("CancelEditUser");

    newUser.onclick = () =>{

      CreateUserSection.style.display = "flex";

      createUsers.style.display = "flex";

      document.body.style.overflow = "hidden";

      NameCreateUser.value = "";
      IDCreateUser.value = "";
      SelectRutaCreateUsers.selectedIndex = 0;
      SaldoCreateUser.value = "";


    }


    CancelCreateUser.onclick = () =>{

      CreateUserSection.style.display = "none";

      createUsers.style.display = "none";

      document.body.style.overflow = "auto";


    }


    });

    return(<>
    
    <div className="main">

        <div className="header">
        <div className="logo"><h1><span className="icon-bus"/> INTRANSIT | </h1><h2>  Administrador</h2></div>
        <div className="exit-section"> <Link to="https://intransit-portal.netlify.app/"><h1><span className="icon-exit"></span>Salir</h1></Link></div>
        </div>

        <div className="nav"><Link to="/"><h1> Home /</h1></Link> <Link to="/pasajeros"><h1> Pasajeros /</h1></Link></div>

        <div className="section">
          <div className="tools">
            <div className="SearchSection">
              <input placeholder="Buscar Pasajero..." type="text" />
              <span className="icon-sort-amount-desc">
              <div className="filterSection">
                <div className="fliteritem"><h1>Filtrar por Nombre</h1></div>
                <div className="fliteritem"><h1>Filtrar por Ruta</h1></div>
                <div className="fliteritem"><h1>Filtrar por Balance</h1></div>
                <h1></h1>
                <h1></h1>
              </div>
              </span>
            </div>
            <div id="newUser" className="newUser"><span className="icon-user-plus"></span><h1>Nuevo Pasajero</h1></div>
          </div>
          <div className="tableusers">
            <div className="columns">
              <h1>ID</h1>
              <h1>Nombre</h1>
              <h1>Ruta</h1>
              <h1>Balance</h1>
              <h1>Actions</h1>
            </div>
            <div className="rows">
              <h1>ID</h1>
              <h1>Nombre</h1>
              <h1>Ruta</h1>
              <h1>Balance</h1>
              <h1>
                <div className="edituser"><span className="icon-pencil"></span></div>
                <div className="deleteuser"><span className="icon-bin"></span></div>
              </h1>
            </div>
            <div className="rows">
              <h1>ID</h1>
              <h1>Nombre</h1>
              <h1>Ruta</h1>
              <h1>Balance</h1>
              <h1>
                <div className="edituser"><span className="icon-pencil"></span></div>
                <div className="deleteuser"><span className="icon-bin"></span></div>
              </h1>
            </div>
            <div className="rows">
              <h1>ID</h1>
              <h1>Nombre</h1>
              <h1>Ruta</h1>
              <h1>Balance</h1>
              <h1>
                <div className="edituser"><span className="icon-pencil"></span></div>
                <div className="deleteuser"><span className="icon-bin"></span></div>
              </h1>
            </div>
            <div className="rows">
              <h1>ID</h1>
              <h1>Nombre</h1>
              <h1>Ruta</h1>
              <h1>Balance</h1>
              <h1>
                <div className="edituser"><span className="icon-pencil"></span></div>
                <div className="deleteuser"><span className="icon-bin"></span></div>
              </h1>
            </div>
            <div className="rows">
              <h1>ID</h1>
              <h1>Nombre</h1>
              <h1>Ruta</h1>
              <h1>Balance</h1>
              <h1>
                <div className="edituser"><span className="icon-pencil"></span></div>
                <div className="deleteuser"><span className="icon-bin"></span></div>
              </h1>
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
    <option value="(27) Pintura-Máximo Gómez - ITLA">(27) Pintura-Máximo Gómez - ITLA</option>
  <option value="(Charles) Villa Mella-ITLA">(Charles) Villa Mella - ITLA</option>
  <option value="(Este) San Pedro-ITLA">(Este) San Pedro - ITLA</option>
</select>
    <label>Balance</label>
    <input id="SaldoCreateUser" min={0} type="number" />

    <div className="actionscreateusers">
      <div id="AddCreateUser" className="AddUser"><h1><span className="icon-user-check"></span> Agregar</h1></div>
      <div id="CancelCreateUser" className="canceluser"><h1>Cancelar</h1></div>
    </div>
    </div>


    <div id="EditUsers" className="createUsers">
      <h1><span className="icon-user-tie"></span> Gestionar Pasajero</h1>
    <label>Nombre</label>
    <input id="NameEditUser" type="text" />
    <label>ID</label>
    <input id="IDEditUser" type="text" />
    <label>Ruta</label>
    <select id="SelectRutaEditUsers" name="select">
    <option selected value="NONE">Ninguna</option>
  <option value="(27) Pintura-Máximo Gómez - ITLA">(27) Pintura-Máximo Gómez - ITLA</option>
  <option value="(Charles) Villa Mella - ITLA">(Charles) Villa Mella - ITLA</option>
  <option value="(Este) San Pedro - ITLA">(Este) San Pedro - ITLA</option>
</select>
    <label>Balance</label>
    <input id="SaldoEditUser" min={0} type="number" />

    <div className="actionscreateusers">
      <div id="AddEditUser" className="AddUser"><h1><span className="icon-floppy-disk"></span> Guardar</h1></div>
      <div id="CancelEditUser" className="canceluser"><h1>Cancelar</h1></div>
    </div>
    </div>
    
    </>);
}