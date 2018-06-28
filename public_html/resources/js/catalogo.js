/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Saldo {
    constructor() {
        this.saldo = 0;
    }

    actualizarSaldo() {
        this.saldo = 3500;
        $('#saldo').html('$' + this.saldo);
    }
}

var saldo;

// PLANTILLAS
function crearTrPlato(nombre, disponibilidad, precio, platoId) {
    var trPlato = $('<tr/>');
    var tdNombre = $('<td/>', {
        'html': nombre
    });
    
    var tdDisponibilidad = $('<td/>');
    var spanDisp = $('<span/>');
    if (disponibilidad) {
        spanDisp.addClass('badge badge-success');
        spanDisp.html('Disponible');
    } else {
        spanDisp.addClass('badge badge-danger')
        spanDisp.html('Agotado');
    }
    spanDisp.appendTo(tdDisponibilidad);
    
    var tdPrecio = $('<td/>', {
        'html': '$' + precio
    });
    var tdBtn = $('<td/>');
    var btnSolicitar = $('<a/>', {
        'class': 'btn btn-info btn-sm',
        'html': 'Solicitar'
    });
    if (precio > saldo.saldo | !disponibilidad) {
        btnSolicitar.addClass('disabled');
    }
    btnSolicitar.data('id', platoId);
    btnSolicitar.appendTo(tdBtn);
    tdNombre.appendTo(trPlato);
    tdDisponibilidad.appendTo(trPlato);
    tdPrecio.appendTo(trPlato);
    tdBtn.appendTo(trPlato);

    return trPlato;
}
// FIN-PLANTILLAS

$(document).ready(function () {
    var tbPlatos = $('#tbody-platos');
    saldo = new Saldo();
    saldo.actualizarSaldo();
    crearTrPlato('Encebollado de cebolla', true, 15000, 5).appendTo(tbPlatos);
    crearTrPlato('Sushi de jurel', false, 1500, 5).appendTo(tbPlatos);
    crearTrPlato('Tuercas al vapor', true, 3000, 5).appendTo(tbPlatos);
    crearTrPlato('Huevo de cordorniz enana', false, 2500, 5).appendTo(tbPlatos);
    crearTrPlato('Zucaritas con leche', false, 50000, 5).appendTo(tbPlatos);
    crearTrPlato('Perro caliente', true, 2500, 5).appendTo(tbPlatos);
});

