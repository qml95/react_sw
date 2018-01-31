import React, { Component } from 'react';
import Modal from './Modal';



class Planets extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      isOpen: false,
      index: null,
    };
  }

  componentWillMount() {
    fetch('https://swapi.co/api/planets/')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({planets: data.results});
      console.log(data);
      console.log(this.state);
    })
  }

  openModal(index) {
      this.setState({
        isOpen: true,
        index: index,
      });
  }

  closeModal() {
    this.setState({
      isOpen:false,
    });
  }

  generatePlanet() {
    return this.state.planets.map((planet, index) =>{
      return (
          <li
            className='body-list-item'
            key={index}>
            <p>{planet.name}</p>
            <button onClick={() => this.openModal(index)}>...</button>
          </li>
        )
    })
  }

  render() {
    return (
      <div className=''>
        <h2 className='body-title'>{this.props.match.path.substr(1,)}</h2>
        <ul className='body-list'>
          {this.generatePlanet()}
        </ul>
        <Modal show={this.state.isOpen}
          onClose={() => this.closeModal()}>
            {
              this.state.index &&
              <div>
                <h1>{this.state.planets[this.state.index].name}</h1>
              </div>

            }
        </Modal>
      </div>
    );
  }
}

export default Planets;
