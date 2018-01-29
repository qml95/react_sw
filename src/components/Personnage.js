import React, { Component } from 'react';



class Personnage extends Component {
  constructor() {
    super();
    this.state = {
      personnages: [],
    };
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
            <a href='#'>
              {perso.name}
            </a>

          </li>
        )
      })
      this.setState({personnages: personnages});
      console.log(data);
    })
  }

  render() {
    return (
      <div className=''>
        <h2 className='body-title'>Personnages</h2>
        <ul className='body-list'>
          {this.state.personnages}
        </ul>
      </div>
    );
  }
}

export default Personnage;
