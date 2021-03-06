import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import Header from '../components/Header';
import Personnage from '../components/Personnage';
import Accueil from '../components/Accueil';
import Footer from '../components/Footer';



const navItems = [
  {
    href: '',
    page: '',
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
  },
  {
    href: '4',
    page: 'films',
    text: 'Films'
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
          <Route path="/people" component={Personnage} />
          <Route path="/starships" component={Personnage} />
          <Route path="/planets" component={Personnage} />
          <Route path="/films" component={Personnage} />
        </Switch>
        <Footer />
      </main>

    </BrowserRouter>

    );
  }
}

export default Home;
