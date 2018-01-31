import React, { Component } from 'react';
import Modal from './Modal';


class Vaisseaux extends Component {
  constructor() {
    super();
    this.state = {
      vaisseaux: [],
      isOpen: false,
      index: null,
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({vaisseaux: data.results});
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
      isOpen: false,
    });
  }

  generateVaisseaux() {
    return this.state.vaisseaux.map((vaisseau, index)=> {
      return (
        <li
          className='body-list-item'
          key={index}>
          <p>{vaisseau.name}</p>
          <button onClick={() => this.openModal(index)} className='bouton-modal'>
            en savoir plus ..
          </button>
        </li>
      )
    })
  }


  render() {
    return (
      <div className=''>
        <h2 className='body-title'>{this.props.match.path.substr(1)}</h2>
        <ul className='body-list'>
          {this.generateVaisseaux()}
        </ul>
        <Modal show={this.state.isOpen}
          onClose={() => this.closeModal()}>
            {
              this.state.index &&
              <div>
                <h1>{this.state.vaisseaux[this.state.index].name}</h1>
              </div>

            }
        </Modal>
      </div>
    );
  }
}

export default Vaisseaux;
