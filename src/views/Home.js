import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import Header from '../components/Header';
import Footer from '../components/Footer';


class Home extends Component {
  render() {
    return (
        <main className="container">
          <Header />
          <Footer />

        </main>

    );
  }
}

export default Home;
