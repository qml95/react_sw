import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import Header from '../components/Header';
import Personnage from '../components/Personnage';
import Vaisseaux from '../components/Vaisseaux';
import Planets from '../components/Planets';
import Accueil from '../components/Accueil';
import Footer from '../components/Footer';



const navItems = [
  {
    href: '',
    nat: '',
    text: 'Home'
  },
  {
    href: '1',
    nat: '1',
    text: 'personnage'
  },
  {
    href: '2',
    nat: '2',
    text: 'Vaisseaux'
  },
  {
    href: '3',
    nat: '3',
    text: 'Planète'
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
          <Route exact path="/" component={Accueil} />
          <Route path="/1" component={Personnage} />
          <Route path="/2" component={Vaisseaux} />
          <Route path="/3" component={Planets} />
        </Switch>
        <Footer />
      </main>

    </BrowserRouter>

    );
  }
}

export default Home;
