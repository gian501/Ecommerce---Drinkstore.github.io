const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

let productos = [];
const url = "js/catalogo.json"

fetch(url)
    .then(response => response.json())
    .then(info => {
        productos = info;
        refreshProduct(productos);
    });

const dProduct = document.querySelector("#produc-detail");
const catProduct = document.querySelector("#encabezado");
const contador = document.querySelector("#contador");

function refreshProduct(producSelec) {

    dProduct.innerHTML = "";

    producSelec.forEach(producto => {

        const div = document.createElement("div");//contenedor de cada producto
        div.classList.add("producto");
        div.innerHTML = `
            <img class="image-p" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="detail-p">
                <h3 class="nam-p">${producto.titulo}</h3>
                <p class="cost-p">$${producto.precio}</p>
                <button class="sum-product" id="${producto.id}">Agregar</button>
            </div>
        `;

        dProduct.append(div);
    })

    refreshbA();
}



function refreshbA() {
    let botonesAgregar = document.querySelectorAll(".sum-product");;
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", sumarPaC);
    });
}

let productAgCarr;
const productAgLSCarr = localStorage.getItem("producin-C");

if(productAgLSCarr){
    productAgCarr = JSON.parse(productAgLSCarr)
    actContador();
}else{
    productAgCarr = [];
}

function sumarPaC(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    //check si el producto esta en el array
    if(productAgCarr.some(producto => producto.id === idBoton)){
        const index = productAgCarr.findIndex(producto => producto.id === idBoton);
        productAgCarr[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productAgCarr.push(productoAgregado);
    }
    actContador();

    localStorage.setItem("producin-C", JSON.stringify(productAgCarr));

}

function actContador() {
    let nuevoContador = productAgCarr.reduce((acc, producto) => acc + producto.cantidad, 0);
    contador.innerText = nuevoContador;
}

const filtroProduct = document.querySelectorAll(".boton-categoria");
    filtroProduct.forEach(boton => {
    boton.addEventListener("click", (e) => {

        filtroProduct.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "catalogo") {
            const categoriadeProduct = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            catProduct.innerText = categoriadeProduct.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);//realiza un filtro por cada categoria de productos
            refreshProduct(productosBoton);
        } else {
            catProduct.innerText = "Catalogo";
            refreshProduct(productos);
        }
    })
});