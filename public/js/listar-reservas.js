const contenedorReservas = document.querySelector('#contenedor-reservas');

const obtenerReservas = async () => {

    try {
        const res = await fetch('reservas/api/');

        if (res.status === 404) {
            throw ({
                status: 404,
                message: 'No hay reservas'
            })
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
        alert(error.message);
    }


}

const eliminarReserva = async (event) => {
    const id = event.target.dataset.id;

    try {
        const res = await fetch(`reservas/api/${id}`, {
            method: 'DELETE'
        });

        alert(data.message);
        window.location.reload();

    } catch (error) {
        console.log(error);
        alert(error.message);
    }

}

const mostrarReservas = (reservas) => {
    reservas.forEach(reserva => {
        contenedorReservas.innerHTML += `
            <tr>
            <tr>
            <th>${reserva.codigo_reserva}</th>
            <th>${reserva.fecha.toISOString()}</th>
            <th>${reserva.nombre_autor}</th>
            <th>
                <a href="/api/editar/${nuevaReserva.dataset.id}" class="btn btn-warning">
                    Editar
                </a>
                <a href="/api/eliminar/${reserva.codigo_reserva}" class="btn btn-danger">
                    Eliminar
                </a>
            </th>
        </tr>
            </tr>
        `;
    });
}

// Obtener las tareas automáticamente cuando se carga la página
document.addEventListener('DOMContentLoaded', async () => {

    console.log('DOM cargado')

    try {
        const reservas = await obtenerReservas();

        if (!reservas || reservas.length === 0) {
            contenedorReservas.innerHTML += `
                <tr>
                    <td colspan="3">No hay tareas</td>
                </tr>
            `;
            return;
        }

        mostrarTareas(tareas);

    } catch (error) {
        console.log(error);
        alert(error.message);
    }
});