import React, { Component } from 'react';
import Modal from './Modal';


class Personnage extends Component {
  constructor() {
    super();
    this.state = {
      personnages: [],
      isOpen: false
    };
  }
  toggleModal = () => {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(results => {
      return results.json();
    }).then(data => {
      let personnages = data.results.map((perso) => {
        return (
          <li
            className='body-list-item'
            key={perso.name}>
            <button onClick={this.toggleModal}>
              {perso.name}
            </button>

          </li>
        )
      })
      this.setState({personnages: personnages});
      console.log(data);
    })
  }

  render() {
    return (
      <div className='body'>
        <h2 className='body-title'>Personnages</h2>
        <ul className='body-list'>
          {this.state.personnages}
        </ul>
       <Modal show={this.state.isOpen}
         onClose={this.toggleModal}>
         contenue modal
       </Modal>


      </div>
    );
  }
}

export default Personnage;
