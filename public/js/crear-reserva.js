const nuevaReserva = document.querySelector('#nueva-reserva');
const fechaReserva = document.querySelector('[name=fecha]');
const nombreAutor = document.querySelector('[name=nombre]');
const apellidoAutor = document.querySelector('[name=apellido]');
const correoAutor = document.querySelector('[name=email]');
const codigoReserva = document.querySelector('[name=codigo]');

nuevaReserva.addEventListener('submit', async evt => {

    evt.preventDefault();

    try {

        const nuevaReserva = {
            fecha_reserva: fechaReserva.value,
            nombre_autor: nombreAutor.value,
            apellido_autor: apellidoAutor.value,
            correo_electronico_autor: correoAutor.value,
            codigo_reserva: codigoReserva.value
        }

        const res = await fetch('./api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevaReserva)
        });

        if (res.status === 500) {
            throw ({
                status: 500,
                message: 'Error en el servidor'
            })
        }
        
        nuevaReserva.reset();
        window.location.assign('/');
    } catch (error) {
        console.log(error);
    }
})