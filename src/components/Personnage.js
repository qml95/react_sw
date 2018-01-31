import React, { Component } from 'react';
import Modal from './Modal';

class Personnage extends Component {
  constructor() {
    super();
    this.state = {
      personnages: [],
      isOpen: false,
      index: null
    };
  }

  componentWillReceiveProps(nextProps) {
    fetch('https://swapi.co/api'+ nextProps.match.path)
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({personnages: data.results});
      console.log(data);
    })
  }

  openModal(index) {
    this.setState({
      isOpen: true,
      index: index
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
            <button onClick={() => this.openModal(index)} className='bouton-modal'>
              En savoir plus..
            </button>
          </div>
        </li>
      )
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className='body'>
        <h2 className='body-title'>{this.props.match.path.substr(1)}</h2>
        <ul className='body-list'>
          {this.generateList()}
        </ul>
        <Modal show={this.state.isOpen}
          onClose={() => this.closeModal()}>
            {
              this.state.index &&
              <div>
                <h1>{this.state.personnages[this.state.index].name}</h1>
                <p>{this.state.personnages[this.state.index].gender}</p>
                <p>{this.state.personnages[this.state.index].starship_class}</p>

              </div>

            }
        </Modal>
      </div>
    );
  }

}

export default Personnage;
