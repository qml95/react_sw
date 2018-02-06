import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    
    if(!this.props.show) {
      return null;
    }
    let item = this.props.perso
    return (
      <div className="backdrop" >
        <div className="modal">
          <h1>{item.name}</h1>
          <p>{item.gender}</p>
          <p>{item.starship_class}</p>
          <p>{item.climate}</p>

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
