// El siguiente programa tiene un listado de artículos
// solicitandolos al usuario uno por uno y luego que 
// este termina se muestran los artículos ordenados por id.

// Clase para crear articulos
class Articulo {
    constructor(id, nombre, detalle, precio, esPopular) {
        this.id = id;
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
        this.esPopular = esPopular;
    }

    // metodo para mostrar el resultado de busqueda
    aCadena() {
        return `id: ${articuloBuscado.id}
nombre: ${articuloBuscado.nombre}
detalle: ${articuloBuscado.detalle}
$${articuloBuscado.precio}
${articuloBuscado.esPopular ? "Es popular" : "No es popular"}`
    }
}

// este es el objeto que contiene todos los articulos en forma de lista
const listadoDeArticulos = [];

// variable para seguir ingresando articulos al listado
let seguir = true;

do {
    // pregunta al usuario si quiere ingresar un articulo
    seguir = prompt("Desea agregar un articulo a la lista? (si/no)") === "si";

    if (seguir) {
        // Solicita al usuario las propiedades del artículo
        const id = Number.parseInt(prompt("Ingrese un id del artículo (tiene que ser un número)"));
        const nombre = prompt(`Ingrese el nombre del artículo ${id}`);
        const detalle = prompt(`Ingrese el detalle de artículo ${id}`);
        const precio = parseFloat(prompt(`Ingrese el precio de artículo ${id}`));
        const esPopular = prompt(`El artículo ${id} es popular? (si/no)`) === "si";
        const articuloNuevo = new Articulo(id, nombre, detalle, precio, esPopular);
        // Agrega el artículo al listado
        listadoDeArticulos.push(articuloNuevo);
        // Ordena los artículos por id
        listadoDeArticulos.sort((a, b) => a.id - b.id)
        // Muestra el listado por consola
        console.log(listadoDeArticulos);
        alert(`Artículo con id ${id} fue agregado al listado`)
    }

} while (seguir);

// Muestra el listado por consola
console.log("Listado de artículos", listadoDeArticulos);

// Solicita al usuario buscar un articulo por nombre o detalle
alert("Vamos a buscar un artículo")
const busqueda = prompt("Ingresa el nombre del artículo a buscar")

const articuloBuscado =  buscarArticulo(busqueda)

// Muestra el articulo si es que encontro algo
if (articuloBuscado) {
    alert(`Se encontro este articulo:
${articuloBuscado.aCadena()}`)
} else {
    alert("No se encontro articulo con: " + busqueda)
}

function buscarArticulo(busqueda) {
    return listadoDeArticulos.find(art =>
        art.nombre.toLowerCase().includes(busqueda.toLowerCase())
        || art.detalle.toLowerCase().includes(busqueda.toLowerCase())
    )
}
