const editarReserva = document.querySelector('#editar-reserva');
const fechaReserva = document.querySelector('[name=fecha]');
const nombreAutor = document.querySelector('[name=nombre]');
const apellidoAutor = document.querySelector('[name=apellido]');
const correoAutor = document.querySelector('[name=email]');
const codigoReserva = document.querySelector('[name=codigo]');


document.addEventListener('DOMContentLoaded', async () => {

    const response = await fetch(`./api/${editarReserva.dataset.id}`);
    const data = await response.json();

    titulo.value = data.titulo;
    descripcion.value = data.descripcion;
})


// Escuchar el evento submit
editarReserva.addEventListener('submit', (e) => {
    e.preventDefault();

    // Se recupera el ID de la tarea que se va a editar
    const id = e.target.dataset.id;

    // Se crea un objeto con los datos del formulario
    const formData = {
        fecha_reserva: fechaReserva.value,
        nombre_autor: nombreAutor.value,
        apellido_autor: apellidoAutor.value,
        correo_electronico_autor: correoAutor.value,
        codigo_reserva: codigoReserva.value
    }

    // Se envia la peticion al servidor
    fetch(`./api/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(res => res.json())
        .then(data => {
            console.log({ data });
            setTimeout(() => {
                window.location.href = '/';
            }, 1500);
        })
        .catch(err => console.log(err));
});