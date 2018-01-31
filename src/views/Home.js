import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import Header from '../components/Header';
import Personnage from '../components/Personnage';
// import Vaisseaux from '../components/Vaisseaux';
import Planets from '../components/Planets';
import Accueil from '../components/Accueil';
import Footer from '../components/Footer';



const navItems = [
  {
    href: '',
    page: 'Home',
    text: 'Home'
  },
  {
    href: '1',
    page: 'people',
    text: 'Peoples'
  },
  {
    href: '2',
    page: 'starships',
    text: 'Starships'
  },
  {
    href: '3',
    page: 'planets',
    text: 'Planets'
  }
]



class Home extends Component {
  render() {
    return (
      <BrowserRouter>
      <main className="container">
        <Header
          navItems={navItems}
        />
        <Switch>
          <Route exact path="/Home" component={Accueil} />
          <Route path="/people" component={Personnage} />
          <Route path="/starships" component={Personnage} />
          <Route path="/planets" component={Personnage} />
        </Switch>
        <Footer />
      </main>

    </BrowserRouter>

    );
  }
}

export default Home;
