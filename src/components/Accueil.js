import React, { Component } from 'react';
import Modal from './Modal';


class Accueil extends Component {
  constructor(props) {
   super(props);

   this.state = { isOpen: false };
 }

 toggleModal = () => {
   this.setState({
     isOpen: !this.state.isOpen
   });
 }


  render() {
    return (
      <div className=''>
        <h2 className='body-title'>Home</h2>
        <p className='body'>Bienvenu sur l'app Star Wars en react</p>
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          Here's some content for the modal
        </Modal>
      </div>
    );
  }
}

export default Accueil;
