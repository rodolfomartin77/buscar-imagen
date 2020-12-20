//import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Buscador from './Componentes/Buscador';
import Resultado from './Componentes/Resultado';

class App extends Component {

  state = {
    termino : '',
    imagenes : [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth, start');
  }

  paginaAnterior = () => {
        // Leer el state de la página actual
        let pagina = this.state.pagina;

        // Leer si la página es , ya no ir hacia atrás
        if(pagina ===1) return null;

        // Restar uno a la página actual
        pagina += 1;
    
        // agregar el cambio al state
        this.setState({
          pagina 
        }, () => {
          this.consultarApi();
          this.scroll();
        });
    
        //console.log(pagina);
      }
  
  paginaSiguiente = () => {
       // Leer el state de la página actual
       let pagina = this.state.pagina;

       // Sumar uno a la página actual
        pagina += 1;

       // agregar el cambio al state
       this.setState({
          pagina 
       }, () => {
        this.consultarApi();
        this.scroll();
       });

        //console.log(pagina);
  }
  
  consultarApi= () => {
    const termino= this.state.termino;
    const pagina = this.state.pagina;
    const url= 'https://pixabay.com/api/?key=19515322-dbbeb403875ebac606dc854a6&q=${termino}&per_page=30&page=${pagina}';

  console.log (url);

  fetch(url)  
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({ imagenes : resultado.hits}))

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    })  
  }

  render() {
    return (
      <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>

          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justifity-content-center"></div>  
          <Resultado 
           imagenes={this.state.imagenes}
           paginaAnterior={this.paginaAnterior}
           paginaSiguiente={this.paginaSiguiente}
          />
      </div>
    );
  }
}

export default App;
