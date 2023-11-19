
//var hola ="hello"
//console.log(hola)
//var hola="chau"
//console.log(hola)





//declaracion free//

//let free = false;

//declaracion time//

//const validarcliente = (time)=>

//{
//    let edad = prompt("¿cual es tu edad?");
//    if (edad >= 18) {
//        if (time >= 2 && time < 7 && free == false) //alert con horarios//
//        
//        {
//            alert ("podes pasar gratis porque sos la primera persona despues de las 2 AM");
 //           free == true;
//        } else {
//            alert (`son las ${time} 00:00hs y podes pasar, pero tenes que pagar la entrada wachiin`);
 //       }
 //       //alert por edad//
//  //  } else {
 //       alert ("mira papi, sos menor de edad asiq pegate un baño giiil");
 //   }
//}

//objetos de time//

//validarcliente(23);
//validarcliente(24);
//validarcliente(0.2);
//validarcliente(0.6);
//validarcliente(1);
//validarcliente(2);//



//function libro(titulo,descripcion,categoria){
//    this.titulo = titulo;
//   this.descripcion = descripcion;
//    this.categoria = categoria
//    this.hablar = function(){console.log("Hola soy "+ this.titulo +" y mis características son "+ this.descripcion + "y pertenezco a " + this.categoria)}
//}
//const libro2 = new libro("Fisica 3", "Texto Escolar de Fisica para 3° grado de educación","Ciencias Naturales")
//libro2.hablar()



// Objeto literal //

const libros = [
    {
        id:"Libro1" ,
        titulo: "Lengua y Literatura 6 - muestra editorial - Maya Educación",
        descripcion:"Muestra editorial del libro de Lengua y Literatura para 6to año de Educación General Básica.",
        imagen: "/Frontend/images/libros/0df28b1bf6e2e5e17af4e6082ba96402.jpg",
        categoria:{
            nombre: "Lengua",
            id: "lengua"
        }},
    {
        id:"Libro2" ,
        titulo: "Lengua y Literatura 5 - muestra editorial - Maya Educación",
        descripcion:"Muestra editorial del libro de Lengua y Literatura para 5to año de Educación General Básica.",
        imagen: "/Frontend/images/libros/page_1.jpg",
        categoria:{
            nombre: "Lengua",
            id: "lengua"}},
    {
        id:"Libro3" ,
        titulo: "Lengua y Literatura 4 - muestra editorial - Maya Educación",
        descripcion:"Muestra editorial del libro de Lengua y Literatura para 4to año de Educación General Básica.",
        imagen: "/Frontend/images/libros/page_1 (1).jpg",
        categoria:{
            nombre: "Lengua",
            id: "lengua"}},
    {
        id:"Libro4" ,
        titulo: "Proyecto Pilares - Matematica 3° - Texto Escolar",
        descripcion:"Texto Escolar de Matemática para 3° grado de educación, Proyecto Pilares, Editorial Grandes Libros",
        imagen: "/Frontend/images/libros/page_1_thumb_large.jpg",
        categoria:{
            nombre: "Matematica",
            id: "matematica"}
    },
    {
        id:"Libro5" ,
        titulo: "Multiplicaciones rápidas",
        descripcion:"Texto Escolar de Matemática para 4° grado de educación, Proyecto Pilares, Editorial Grandes Libros.",
        imagen: "/Frontend/images/libros/f4c46cbdacd0a5af528adadce7ed0bd4.jpg",
        categoria:{
            nombre: "Matematica",
            id: "matematica"}
    },
    {
        id:"Libro6" ,
        titulo: "Proyecto Pilares - Matematica 6° - Texto Escolar",
        descripcion:"Texto Escolar de Matemática para 6° grado de educación, Proyecto Pilares, Editorial Grandes Libros.",
        imagen: "/Frontend/images/libros/bf9f176166ff9ab1a3f0ff599c480f79.jpg",
        categoria:{
            nombre: "Matematica",
            id: "matematica"}
    },
    {
        id:"Libro7" ,
        titulo: "Ciencias Naturales 2° - Texto Escolar",
        descripcion:"Texto Escolar de Ciencias Naturales para 2° grado de educación",
        imagen: "/Frontend/images/libros/Cuaderno-de-Actividades-y-Ejercicios-de-Ciencias-Naturales-2-Basico-2021.png",
        categoria:{
            nombre: "Ciencias_Naturales",
            id: "naturales"}
    },
    {
        id:"Libro8" ,
        titulo: "Ciencias Naturales 3° - Texto Escolar",
        descripcion:"Texto Escolar de Ciencias Naturales para 3° grado de educación",
        imagen: "/Frontend/images/libros/93b3d95251317d7066847a60d393fa13.jpg",
        categoria:{
            nombre: "Ciencias_Naturales",
            id: "naturales"}
    },
    {
        id:"Libro9" ,
        titulo: "Ciencias Naturales 4° - Texto Escolar",
        descripcion:"Texto Escolar de Ciencias Naturales para 4° grado de educación",
        imagen: "/Frontend/images/libros/OIP.jpg",
        categoria:{
            nombre: "Ciencias_Naturales",
            id: "naturales"}
    },
    {
        id:"Libro10" ,
        titulo: "Ciencias Sociales 1° - Texto Escolar",
        descripcion:"Texto Escolar de Ciencias Sociales para 1° grado de educación",
        imagen: "/Frontend/images/libros/3226-T-scaled.jpg ",
        categoria:{
            nombre: "Ciencias_Sociales",
            id: "sociales"}
    },    {
        id:"Libro11" ,
        titulo: "Ciencias Sociales 2° - Texto Escolar",
        descripcion:"Texto Escolar de Ciencias Sociales para 2° grado de educación",
        imagen: "/Frontend/images/libros/ciencias-sociales-2-interactivo-susaeta.jpg ",
        categoria:{
            nombre: "Ciencias_Sociales",
            id: "sociales"}
    },    {
        id:"Libro12" ,
        titulo: "Ciencias Naturales 3° - Texto Escolar",
        descripcion:"Texto Escolar de Ciencias Sociales para 3° grado de educación",
        imagen: "/Frontend/images/libros/ciencias-sociales-3-interactivo-susaeta.jpg",
        categoria:{
            nombre: "Ciencias_Sociales",
            id: "sociales"}
    },    {
        id:"Libro13" ,
        titulo: "Historia Universal",
        descripcion:"TTexto de Historia para grados de educación",
        imagen: "/Frontend/images/libros/53181238.jpg ",
        categoria:{
            nombre: "Historia",
            id: "historia"}
    },    {
        id:"Libro14" ,
        titulo: "La Historia Oficial",
        descripcion:"Texto de Historia para grados de educación",
        imagen: "/Frontend/images/libros/La-historia-oficial_004.jpg ",
        categoria:{
            nombre: "Historia",
            id: "historia"}
    },    {
        id:"Libro15" ,
        titulo: "Historia de la Literatura Argentina ",
        descripcion:"Texto Escolar de Historia para grados de educación",
        imagen: "/Frontend/images/libros/171960419_150653137_tcimg_5ADBD938.jpg  ",
        categoria:{
            nombre: "Historia",
            id: "historia"}
    },    {
        id:"Libro16" ,
        titulo: "Fisica 1",
        descripcion:"Texto Escolar de Fisica para 1° grado de educación",
        imagen: "/Frontend/images/libros/9789962698005.jpg ",
        categoria:{
            nombre: "Fisica",
            id: "fisica"}
    },    {
        id:"Libro17" ,
        titulo: "Fisica 2",
        descripcion:"Texto Escolar de Fisica para 2° grado de educación",
        imagen: "/Frontend/images/libros/OIP (1).jpg ",
        categoria:{
            nombre: "Fisica",
            id: "fisica"}
    },    {
        id:"Libro18" ,
        titulo: "Fisica 3 ",
        descripcion:"Texto Escolar de Fisica para 3° grado de educación",
        imagen: "/Frontend/images/libros/Os-Alicerces-da-Fisica-3-Eletricidade-Fsica-Moderna-20170515083533.jpg ",
        categoria:{
            nombre: "Fisica",
            id: "fisica"}
    }
    ]

// Constantes de objetos //

const contenedorLibros = document.querySelector("#contenedor-libros")
const botonesCategoria = document.querySelectorAll(".button_categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")

// PREGUNTAR //

function cargarLibros(librosElegidos){
    contenedorLibros.innerHTML = "";

    librosElegidos.forEach(libros => {
    const div = document.createElement("div")

// div libros //

    div.classList.add("libros")
    div.innerHTML = `
    <img  class="libros-imagen"src="${libros.imagen}" alt="${libros.titulo}">
            <div class="libros-detalles">
            <h3 class="libro-titulo">${libros.titulo}</h3>
            <p class="libro-descripcion">${libros.descripcion}</p>
            <p class="libro-categoria">Categoria ${libros.categoria}</p>
            <button class="libro-agregar" id="agregarBtn${libros.id}"  >Reservar</button>
            </div>

            `;


            contenedorLibros.append(div)
            
            let btnAgregar = document.getElementById(`agregarBtn${libros.id}`)
            btnAgregar.addEventListener("click", ()=>{
              reservarLibro()
            })


});

}

// Fontawesome //

function reservarLibro(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estás seguro?',
        text: "Al hacer click no se puede revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Reservar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Reservado',
            'Tu libro, fue reservado con éxito',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'No se reservó su libro',
            'error'
          )
        }
      })
}

// Llamamos a la funcion //

cargarLibros(libros)

// botones //

botonesCategoria.forEach(boton =>{
    boton.addEventListener("click",(e) =>{
        botonesCategoria.forEach(boton => boton.classList.remove("active"))
    e.currentTarget.classList.add("active")

    if(e.currentTarget.id !="todos"){
        const librosCategoria= libros.find(libro => libro.categoria.id === e.currentTarget.id)
    tituloPrincipal.innerText = librosCategoria.categoria.nombre;

    const librosBoton = libros.filter(libro => libro.categoria.id === e.currentTarget.id)

    cargarLibros(librosBoton)
    }else{
        tituloPrincipal.innerText = "Todos los Libros"
        cargarLibros(libros)
    }
    })
})































