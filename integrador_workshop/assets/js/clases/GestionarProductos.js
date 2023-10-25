class GestionarProductos {

    iniciar() {

        productos = [

			{
				"id": 1,
				"nombre": "Moto E13",
				"descripcion": "Camara de 13 MP con inteligencia artificial",
				"marca": "Motorola",
				"precio": 65,
				"stock": 50,
				"img": "motoE13.jpg",
				"destacado": 0
			},
			{
				"id": 2,
				"img": "motoG32.jpg",
				"nombre": "Moto G32",
				"marca": "Motorola",
				"precio": 130,
				"stock": 50,
				"descripcion": "Obtené horas de potencia, gracias a la batería de 5000 mAh",
				"destacado": 0
			},
			{
				"id": 3,
				"img": "motoG72.jpg",
				"nombre": "Moto G72",
				"marca": "Motorola",
				"precio": 202,
				"stock": 50,
				"descripcion": "Smartphone Android. Sistema de cámaras con sensor principal de 108 MP",
				"destacado": 0
			},
			{
				"id": 4,
				"img": "galaxyA34.jpg",
				"nombre": "Galaxy A34",
				"marca": "Samsung",
				"precio": 190,
				"stock": 50,
				"descripcion": "Es el sucesor del Galaxy A33 5G. Con una pantalla Super AMOLED de 6.6 pulgadas",
				"destacado": 1
			},
			{
				"id": 5,
				"img": "galaxyM23.jpg",
				"nombre": "Galaxy M23",
				"marca": "Samsung",
				"precio": 110,
				"descripcion": "Se suma a la serie Galaxy M con una pantalla de 120 Hz",
				"destacado": 0
			},
			{
				"id": 6,
				"img": "galaxyS20fe.jpg",
				"nombre": "Galaxy S20Fe",
				"marca": "Samsung",
				"precio": 240,
				"stock": 50,
				"descripcion": "Mejora tu experiencia de visualización con la pantalla Infinity-O Display",
				"destacado": 1
			},
			{
				"id": 7,
				"img": "galaxyTabS6.jpg",
				"nombre": "Galaxy Tab S6 lite",
				"marca": "Samsung",
				"precio": 300,
				"stock": 50,
				"descripcion": "Aprender desde casa es más fácil, Podrás tomar nota rápidas en Samsung Note con el S Pen",
				"destacado": 0
			},
			{
				"id": 8,
				"img": "30Se.jpg",
				"nombre": "30 SE",
				"marca": "TCL",
				"precio": 95,
				"stock": 50,
				"descripcion": "Su fuerte es Precio-calidad",
				"destacado": 0
			}

		]

		let productosDestacados = productos.filter(prod => prod.destacado == 1);

		this.cargarProductos(productosDestacados);
	}

	cargarProductos(productos) {

        //const divProductos = document.getElementById("productos");
        const divProductos = document.querySelector("#productos");
        divProductos.innerHTML = "";

        if (productos.length == 0) {

            this.mostrarHeader("No se han encontrado productos");
            return false;
        } else {

            productos.forEach((producto) => {


            /*  let id = producto.id;
                let nombre = producto.nombre;
                let img = producto.img;
                let descripcion = producto.descripcion;
                let precio = producto.precio;*/

                const {id,nombre,precio,img,cantidad,descripcion} = producto

                let prod = document.createElement("div");
                prod.classList.add('col-12', 'h200', 'border', 'bg-white', 'rounded', 'mt-3', 'd-flex', 'align-items-center', 'p-3', 'flex-row', 'producto');
                prod.id = "row_"+id;
                prod.innerHTML = `<div class="w-20">

                                <img src="./assets/img/${img}" alt="" width="150" height="150" >
                                </div>
                                <div class="p-3 d-flex flex-column w-60 h-150">
                                <h3>${nombre}</h3>                                            
                                <p>${descripcion.substring(0,120)}</p>
                            </div>
							
                                <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                <p class="precio">$${precio}</p>
                                <a href="javascript:addCarrito(${id})" class="btn btn-primary">Agregar al carrito</a>
                                </div>
                                `;


                divProductos.appendChild(prod);



            });


        }




    }


    mostrarHeader(msg) {


        const headerProductos = document.querySelector("#headerProductos");
        headerProductos.innerHTML = msg;

    }


	buscar(valor) {

		let resultado = productos.filter(producto =>
			producto.nombre.toLowerCase().includes(valor.toLowerCase()) ||
			producto.descripcion.toLowerCase().includes(valor.toLowerCase()));
		this.cargarProductos(resultado);
	}

	addCart(item){


        const existe = carrito.some(producto => producto.id === item.id) ;

        if (existe){


            //mapeo el producto con el id pasado por parametro con su cantidad actualizada
            const articulo = carrito.map(producto=>{

                if (producto.id === item.id){


                    producto.cantidad++;
                    return producto;

                }else{

                    return producto ;

                }


            })

            Toastify({

                text : "Se actualizo la cantidad del producto",
                duration: 2000 ,
                gravity: "bottom"

        }).showToast();

        }else{


            carrito.push(item);

            Toastify({

                text : "Producto agregado con exito",
                duration: 2000 ,
                gravity: "bottom"

        }).showToast();
        }
        this.actualizarCarrito();

    }

}





