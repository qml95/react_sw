import React, { Component } from 'react';



class Planets extends Component {
  constructor() {
    super();
    this.state = {
      planets: [],
    };
  }

  componentDidMount() {

    fetch('https://swapi.co/api/planets/')
    .then(results => {
      return results.json();
    }).then(data => {
      let planets = data.results.map((planet) => {
        return (
          <li
            className='body-list-item'
            key={planet.name}>
            <div>
              <h4>{planet.name}</h4>
              <p>climat : {planet.climate}</p>
            </div>
          </li>
        )
      })
      this.setState({planets: planets});
      console.log(data);
    })
  }

  render() {
    return (
      <div className=''>
        <h2 className='body-title'>Planets</h2>
        <ul className='body-list'>
          {this.state.planets}
        </ul>
      </div>
    );
  }
}

export default Planets;
