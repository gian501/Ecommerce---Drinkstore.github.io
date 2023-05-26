const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

// Productos
const productos = [
    // Cervezas
    {
        id: "cerveza-01",
        titulo: "Stella Artois 473 ml",
        imagen: "./img/cervezas/01.jpg",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
        precio: 650
    },
    {
        id: "cerveza-02",
        titulo: "Heineken 473 ml",
        imagen: "./img/cervezas/02.jpg",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
        precio: 550
    },
    {
        id: "cerveza-03",
        titulo: "Goolsh 550 ml",
        imagen: "./img/cervezas/03.jpg",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
        precio: 900
    },
    {
        id: "cerveza-04",
        titulo: "Blue Moon 330 ml",
        imagen: "./img/cervezas/04.jpg",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
        precio: 800
    },
    {
        id: "cerveza-05",
        titulo: "Corona 330 ml",
        imagen: "./img/cervezas/05.jpg",
        categoria: {
            nombre: "Cervezas",
            id: "cervezas"
        },
        precio: 600
    },
    // Whisky
    {
        id: "Whisky-01",
        titulo: "Glenmorangie The Quinta Ruban Whisky 700 ml",
        imagen: "./img/whisky/01.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 73000
    },
    {
        id: "Whisky-02",
        titulo: "Johnnie Walker Blue Label Whisky 750 ml",
        imagen: "./img/whisky/02.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 101000
    },
    {
        id: "Whisky-03",
        titulo: "Makers Mark Whisky 750 ml",
        imagen: "./img/whisky/03.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 21000
    },
    {
        id: "Whisky-04",
        titulo: "Glenfiddich 15 Años Whisky 750 ml",
        imagen: "./img/whisky/04.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 50000
    },
    {
        id: "Whisky-05",
        titulo: "The Macallan Triple Cask 12 Años Whisky 700 ml",
        imagen: "./img/whisky/05.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 71000
    },
    {
        id: "Whisky-06",
        titulo: "Glen Moray Heritage 18 Años Whisky 700 ml",
        imagen: "./img/whisky/06.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 110000
    },
    {
        id: "Whisky-07",
        titulo: "The Macallan Sherry Oak 12 Años Whisky 750 ml",
        imagen: "./img/whisky/07.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 95000
    },
    {
        id: "Whisky-08",
        titulo: "Chivas Regal Royal Salute 21 Años Sapphire Whisky 700 ml",
        imagen: "./img/whisky/08.jpg",
        categoria: {
            nombre: "Whisky",
            id: "Whisky-Bourbon"
        },
        precio: 95000
    },
    // Gin
    {
        id: "Gin-01",
        titulo: "Bombay Gin 750 ml",
        imagen: "./img/gin/01.jpg",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 7500
    },
    {
        id: "Gin-02",
        titulo: "Hendricks Gin 700 ml",
        imagen: "./img/gin/02.jpg",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 19000
    },
    {
        id: "Gin-03",
        titulo: "Rutte Sloe Gin 700 ml",
        imagen: "./img/gin/03.jpg",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 40000
    },
    {
        id: "Gin-04",
        titulo: "Puerto de Indias Black Edition Gin 700 ml",
        imagen: "./img/gin/04.jpg",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 26000
    },
    {
        id: "Gin-05",
        titulo: "Tanqueray Gin 700 ml",
        imagen: "./img/gin/05.jpg",
        categoria: {
            nombre: "Gin",
            id: "gin"
        },
        precio: 10000
    },
    // Ron
    {
        id: "Ron-01",
        titulo: "Bacardi Carta Oro Ron 750 ml",
        imagen: "./img/ron/01.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 4500
    },
    {
        id: "Ron-02",
        titulo: "Flor de Caña Centenario 12 Años Ron 750 ml",
        imagen: "./img/ron/02.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 30000
    },
    {
        id: "Ron-03",
        titulo: "Appleton Estate Extra 12 Años Ron 750 ml",
        imagen: "./img/ron/03.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 14000
    },
    {
        id: "Ron-04",
        titulo: "Diplomático Mantuano Ron 700 ml",
        imagen: "./img/ron/04.jpg",
        categoria: {
            nombre: "Ron",
            id: "ron"
        },
        precio: 22000
    },
  
];

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

refreshProduct(productos)

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