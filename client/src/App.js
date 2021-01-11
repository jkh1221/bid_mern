import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import CarPage from './views/car';
import './Assets/css/style.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/filter-category' component={CarPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
