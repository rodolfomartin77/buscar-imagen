import React from 'react';

const Paginacion = props => {
    return (
        <div className="py-3">
            <button onclick={props.paginaAnterior} type="button" className="btn btn-info mr--1">Anterior &larr;</button>
            <button onclick={props.paginaSiguiente} type="button" className="btn btn-info">Siguiente &larr;</button>
        </div>
    )
}

export default Paginacion;