const btnCarrito = document.querySelector(".segundo-cont");
const Carrito = document.querySelector(".popup-carrito");
const CerrarCarro = document.querySelector(".Cerrar-carrito");
const SumarCarrito = document.querySelectorAll(".btn-add-carrito");
const displayCarrito = document.querySelector(".contenedor");
const displayValor = document.querySelector(".precio-compra");
const btnComprar = document.querySelector(".btn-compra");
const contadorLocarStorage = document.querySelector(".cant-carrito");

let productos = [];
let contador = 0;
let valor = 0;


btnCarrito.addEventListener("click", () => {
  Carrito.style.visibility = "visible";
});
CerrarCarro.addEventListener("click", () => {
  Carrito.style.visibility = "hidden";
});

SumarCarrito.forEach(elemento => {

  elemento.addEventListener("click", (e) => {

    let precio = e.target.previousElementSibling.previousElementSibling.textContent;
    let nombre = e.target.parentElement.nextElementSibling.textContent;
    let img = e.target.parentElement.parentElement.previousElementSibling.firstElementChild.src;



    MostrarEnCarrito(precio, nombre, img);
    ActualizarValorCompra(precio);
    contador++;
    
    contadorLocarStorage.textContent=`${contador}`;
    
  });
});


const MostrarEnCarrito = (precio, nombre, img) => {

  const listaCartitas = document.querySelectorAll(".cartita-info");

  for (let i = 0; i < listaCartitas.length; i++) {

    if (listaCartitas[i].firstElementChild.textContent === nombre) {

      listaCartitas[i].firstElementChild.nextElementSibling.firstElementChild.value++;
      return;
    }
   
  }


  const itemCarrito = document.createElement('div');
  let cartaCarrito = `
  <div class="carta-ind">
    <div class="cartita-foto"><img src=${img} alt=""></div>
    <div class="cartita-info">
      <h3>${nombre}</h2>
      <span>Unidades:<input class="cant-unidades" type="number" value="1"></span>
      <span>Subtotal:${precio}</span>
      <div><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-x" width="24"
      height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#597e8d" fill="none" stroke-linecap="round"
      stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7h16" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
      <path d="M10 12l4 4m0 -4l-4 4" />
      </svg></div>
    </div>
  </div>`
  itemCarrito.innerHTML = cartaCarrito;
  displayCarrito.append(itemCarrito);

}

const ActualizarValorCompra = (precio) => {
  if(typeof(precio) ==="number"){
    displayValor.lastElementChild.textContent = `$${precio}`;
    valor= 0;
  }
  let precionew = precio.slice(1, -3);
  let precioInt = parseInt(precionew);
  valor += precioInt;
  displayValor.lastElementChild.textContent = `$${valor}`;

}

btnComprar.addEventListener("click",()=>{
  alert("Gracias por comprar :)");
  displayCarrito.innerHTML= '';
  ActualizarValorCompra(0);
  contador = 0;
  contadorLocarStorage.textContent=`${cont}`;
  
})






