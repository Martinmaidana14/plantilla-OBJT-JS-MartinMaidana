
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
const carro = JSON.parse(localStorage.getItem("carro")) || []
function validarFormulario(e){


    e.preventDefault();
    console.log("Formulario Enviado");


	//Capturando inputs y value
	let inputNombre = document.getElementById("nombre").value
	let inputApellido = document.getElementById("apellido").value


	const usuario = {
		nombre: inputNombre,
		apellido: inputApellido
	}

	localStorage.setItem("usuario", JSON.stringify(usuario))
}

// Variables Globales
let carrito = [] ;
let productos =new Array () ;

let gestor ;


const key_carrito = "carrito";

// Evento que se dispara cuadno se carga la pagina
document.addEventListener("DOMContentLoaded",()=>{

    //UTILIZO OPERADOR OR PARA CHEQUEAR
    carrito = JSON.parse(localStorage.getItem(key_carrito)) || [] ;

    gestor = new GestionarProductos() ;
    gestor.iniciar();


})



document.querySelector("#buscar").addEventListener("keyup",()=>{

    let q = document.querySelector("#buscar").value ;

    if (q.length >= 2){

    gestor.buscar(q);

    }else{

    gestor.mostrarHeader("Todos los productos en stock");
    gestor.cargarProductos(productos);


    }


})


/**
 * Agrega al carrito un producto
 * @param {*} id  id del producto a agregar
 */
function addCarrito(id){

    const prod = document.querySelector("#row_"+id);

    let titulo = prod.querySelector('h3').textContent;
    //elimino el simbolo $ para poder convertir a numero
    let precio = prod.querySelector(".precio").textContent.substring(1,prod.querySelector(".precio").textContent.length);
    let img =  prod.querySelector("img").src;

    let producto = new Producto (id,titulo,precio,img);

    gestor.addCart(producto);

}

/**
 * Elimina un producto segun su id
 * @param {*} id ide de producto a eliminar
 */
function eliminar(id){
    gestor.eliminarProducto(id);
}