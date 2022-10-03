'use strict';
let formulario = 1;
const inputCodigo = document.querySelector('#inputCodigo');
const contenedorFormulario = document.querySelector('.confirmacion');
const codigoInvitado='';


let cambioDeFormulario = (num) => {
  formulario = num;
  cargarFormulario();
}

let cargarFormulario = () =>{
    if (formulario === 1) {
        cargarFormularioCodigoConfirmacion();
    }
    if(formulario === 2){
        cargarFormularioIndicaciones();
    }
    
    if(formulario === 3){
      cargarFormularioInvitado();
  }
}

const cargarFormularioCodigoConfirmacion = () => {
    let codigoHTML = crearCodigoConfirmacionHTML();
    contenedorFormulario.innerHTML = codigoHTML;
  };
  
const cargarFormularioIndicaciones = () => {
    let codigoHTML = crearCodigoFormularioIndicacionesHTML();
    contenedorFormulario.innerHTML = codigoHTML;
  };
const cargarFormularioInvitado = () => {
    let codigoHTML = crearCodigoFormularioInvitadoHTML();
    contenedorFormulario.innerHTML = codigoHTML;
  };
  
const crearCodigoConfirmacionHTML = () => {
    let codigoHTML = `<div
    class="inv-card col-lg-4 col-md-5 col-sm-8 col-10 p-3 mx-auto flex-column justify-content-start"
  >

    <h2 class="card-head">Confirmacion</h2>
    <p class="mt-3">
      INGRESA TU NOMBRE O CÓDIGO DE INVITADO Y DA CLIC EN BUSCAR
    </p>
    <input type="text" id="inputCodigo"/>
    <button class="mt-3" type="submit" id="boton1" onclick='cambioDeFormulario(2)'>BUSCAR</button>
    <p class="mt-3">
      Usa el nombre de rótulo La Página Web de Tu Boda o el código
      LG8360 para probar nuestro formulario de confirmaciones
    </p>
  </div>
`;
  
    return codigoHTML;
  };

  const crearCodigoFormularioIndicacionesHTML = () => {
    let codigoHTML = `<div
    class="inv-card col-lg-4 col-md-5 col-sm-8 col-10 mx-auto position-relative flex-column justify-content-start"
  >
    <h2 class="card-head">INVITACIÓN</h2>
    <p class="mt-3">LA PÁGINA WEB DE TU BODA</p>
    <p class="mt-3">
      ¡Hola, te invitamos a nuestra boda! Esperamos puedas asistir.
    </p>
    <div class="pases w-100  mt-auto">
      <p>PASES</p>
      <hr />
      <div class="d-flex  justify-content-evenly">
        <div class="adultos">
          <p>ADULTOS</p>
          <p>4 PASES</p>
        </div>
        <div class="niños">
          <p>NIÑOS</p>
          <p>1 PASES</p>
        </div>
      </div>
      <div class="d-flex  justify-content-evenly">
        <button id="boton2" onclick='cambioDeFormulario(1)'>REGRESAR</button>
        <button id="boton3" onclick='cambioDeFormulario(3)'>CONTINUAR</button>
      </div>
    </div>
  </div>`;
  
    return codigoHTML;
  };

  const crearCodigoFormularioInvitadoHTML = () => {
    let codigoHTML = `<div
    class="inv-card col-lg-4 col-md-5 col-sm-8 col-10 mx-auto position-relative flex-column justify-content-start"
  >
    <h2 class="card-head">CONFIRMACION DE INVITADOS</h2>
    <p class="mt-3">
      Selecciona la casilla a lado del nombre de los invitados que
      desees confirmar
    </p>
    <form action="" class="w-100">
      <div
        class=" w-100 d-flex align-items-start justify-content-start"
      >
        <div class="adultos d-flex flex-column m-3">
          <p class="text-start w-100">ADULTOS</p>
          <label
            ><input class="m-1" type="checkbox" id="c1" value="c1" />NOMBRE</label
          >
          <label
            ><input class="m-1" type="checkbox" id="c2" value="c2" />NOMBRE</label
          >
          <label
            ><input class="m-1" type="checkbox" id="c3" value="c3" />NOMBRE</label
          >
          <label
            ><input class="m-1" type="checkbox" id="c4" value="c4" />NOMBRE</label
          >
        </div>
        <div class="niños  d-flex flex-column m-3">
          <p class=" w-100 text-start">NIÑOS</p>
          <label
            ><input  class="m-1" type="checkbox" id="c5" value="c5" />NOMBRE</label
          >
        </div>
      </div>
      <div class="w-100 ">
        <div class="lista d-flex flex-column align-items-start m-3">
          <label for="">EVENTO</label>
          <select class="" name="evento" id="color">
            <option value="">Seleccionar</option>
            <option value="1">Ceremonia y Recepción</option>
            <option value="2">Solo Ceremonia</option>
            <option value="3">Solo Recepcion</option>
            <option value="4">Lo siento, ninguna de las dos</option>
          </select>
        </div>
      </div>

    
        <div class="d-flex h justify-content-evenly align-items-end">
          <button type="" id="boton4" onclick='cambioDeFormulario(2)'>REGRESAR</button>
          <button type="" id="boton5" onclick=''>CONFIRMAR</button>
        </div>
      
    </form>
  </div>`;
  
    return codigoHTML;
  };

