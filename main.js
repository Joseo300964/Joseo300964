
const productosArray = [
  {
    id: "anillo-01",
    titulo: "Anillo 01",
    imagen:"assets/img/anillo con piedras preciosas en 18k.jpg",
    
    categoria: {
      nombre:"anillos",
      id:"anillos"     
    },
    precio:1000
  }

];

const contenedorProductos = document.querySelector("contenedor-productos");

function cargarProductos() {
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
    
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo} </h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="productos-agregar" id="${producto.id}">Agregar al carrito</button>
            </div>
            `;

            contenedorProductos.append(div);
  })
}

cargarProductos();

