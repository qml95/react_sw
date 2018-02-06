import React, { Component } from 'react';
import Modal from './Modal';

class Personnage extends Component {
  constructor() {
    super();
    this.state = {
      personnages: [],
      isOpen: false,
      perso: {}
    };
  }

  retrieveData(pathName) {
    fetch('https://swapi.co/api' + pathName)
    .then(results => results.json())
    .then(data => this.setState({personnages: data.results}))
  }

  componentWillMount() {
    this.retrieveData(this.props.match.path)
  }

  componentWillReceiveProps(nextProps) {
    this.retrieveData(nextProps.match.path)
  }

  openModal(perso) {
    this.setState({
      isOpen: true,
      perso: perso
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });
  }

  generateList() {
    return this.state.personnages.map((perso, index) => {
      return (
        <li
          className='body-list-item'
          key={index}>
          <div>
            <p>
              {perso.name}
            </p>
            <p>
              {perso.title}
            </p>
            <button onClick={() => this.openModal(perso)} className='bouton-modal'>
              En savoir plus..
            </button>
          </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div className='body'>
        <h2 className='body-title'>{this.props.match.path.substr(1)}</h2>
        <ul className='body-list'>
          {this.generateList()}
        </ul>
        <Modal
          show={this.state.isOpen}
          onClose={() => this.closeModal()}
          perso= {this.state.perso}
        />
      </div>
    );
  }

}

export default Personnage;
