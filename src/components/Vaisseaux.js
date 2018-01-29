import React, { Component } from 'react';



class Vaisseaux extends Component {
  constructor() {
    super();
    this.state = {
      vaisseaux: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships')
    .then(results => {
      return results.json();
    }).then(data => {
      let vaisseaux = data.results.map((vaiss) => {
        return (
          <li
            className='body-list-item'
            key={vaiss.name}>
            <a>{vaiss.name}</a>
          </li>
        )
      })
      this.setState({vaisseaux: vaisseaux});
      console.log(data);
    })
  }

  render() {
    return (
      <div className=''>
        <h2 className='body-title'>Vaisseaux</h2>
        <ul className='body-list'>
          {this.state.vaisseaux}
        </ul>
      </div>
    );
  }
}

export default Vaisseaux;
