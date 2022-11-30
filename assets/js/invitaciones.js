function obtenerInvitaciones() {
    const code = $('#inputCodigo').val();
    $.ajax({
        type: 'GET',
        url: `http://127.0.0.1:8000/invitaciones/${code}`,
        success: function(response) {
            console.log('res: ', response);
            if (response.ok) {
                $('#modalConfirmation').modal('show');
            } else {
                Swal.fire({
                    title: '¡Lo sentimos!',
                    icon: 'error',
                    text: 'No se encontró ningún registro de ese nombre o código.',
                });
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            Swal.fire({
                title: 'Error enviando el codigo.',
                icon: 'error'
            });
             event.target.reset();
        }
    });
    console.log('code: ', code);
}