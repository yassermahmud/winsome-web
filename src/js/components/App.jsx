import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

import Header from './header';
import HeroImage from './hero/HeroImage';
import Promo from './promo/Promo';
import Calender from './calender/Calender';
import Blog from './Whatshappen/Blog';
import Gallery from './gallery/Gallery';
import Footer from './footer/Footer';
import Career from './career/Career';
import Home from './Home/Home';
import Junior from './Junior/Junior';
import Middle from './middle/Middle';
import PhotoGallery from './photogallery/PhotoGallery';
import Staff from './staff/Staff';
import Achievers from './achievers/Achievers';
import Events from './events/Events';
import Contact from './contact/Contact';
import Policies from './policies/Policies';
import OurSchool from './ourschool/OurSchool';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    let { } = this.props;

    return (
      <Router>
        <div className="app">
          <Header />
          <HeroImage />
          <Switch>
            <Route exact path="/career" component={Career} />
            <Route exact path="/junior" component={Junior} />
            <Route exact path="/middle" component={Middle} />
            <Route exact path="/photo-gallery" component={PhotoGallery} />
            <Route exact path="/staff" component={Staff} />
            <Route exact path="/annual-achievers" component={Achievers} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/policies" component={Policies} />
            <Route exact path="/our-school" component={OurSchool} />            
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
};

App.propTypes = {
  //getAction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    test: state.test
  };
};

export default connect(mapStateToProps, {})(App);