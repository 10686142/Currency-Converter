import './App.css';
import React, { Component } from 'react';

// Flag css: https://github.com/josephchang/react-currency-flags
import 'currency-flags/dist/currency-flags.min.css'

//import components
import Topbar from './components/layout/TopBar.js';
import CurrConverter from './components/CurrConverter.js';
import Footer from './components/layout/Footer.js';

// Renders all elements of our SPA
class App extends Component {

    render() {
        return (
            <React.Fragment>
              <Topbar />
              <CurrConverter />
              <Footer />
            </React.Fragment>
        );
    }
}

export default App;
