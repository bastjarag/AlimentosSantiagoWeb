/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Estado {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}

class Pedido {
    constructor(id, nombre, fechaPedido, estado) {
        this.id = id;
        this.nombre = nombre;
        this.fechaPedido = fechaPedido;
        this.estado = estado;
    }
}

function agregarPedido(pedido) {
    var trPedido = $('<tr/>');
    var tdId = $('<td/>', {
        'html': pedido.id
    });
    tdId.appendTo(trPedido);
    var tdNombre = $('<td/>', {
        'html': pedido.nombre
    });
    tdNombre.appendTo(trPedido);
    
    var tdFechaPedido = $('<td/>', {
        'html': pedido.fechaPedido
    });
    tdFechaPedido.appendTo(trPedido);
    
    var tdEstado = $('<td/>');
    var spanEstado = $('<span/>');
    switch (pedido.estado.id) {
        case 3:
            spanEstado.addClass('badge badge-success');
            break;
        case 4:
            spanEstado.addClass('badge badge-danger');
            break;
        default:
            spanEstado.addClass('badge badge-info');
            break;
    }
    spanEstado.html(pedido.estado.nombre);
    spanEstado.appendTo(tdEstado);
    tdEstado.appendTo(trPedido);
    
    trPedido.appendTo('#pedidos');
}

$(document).ready(function() {
    despachando = new Estado(2, 'Despachando');
    entregado = new Estado(3, 'Entregado');
    cancelado = new Estado(4, 'Cancelado');
    agregarPedido(new Pedido(1, 'Bobina a la plancha', '15-03-1889', entregado));
    agregarPedido(new Pedido(2, 'Zucaritas con leche', '16-03-1994', cancelado));
    agregarPedido(new Pedido(3, 'Tuercas al vapor', '25-03-2018', entregado));
    agregarPedido(new Pedido(4, 'Tuercas al vapor', '26-03-2018', entregado));
    agregarPedido(new Pedido(5, 'Gato rostizado', '27-03-2018', despachando));
});