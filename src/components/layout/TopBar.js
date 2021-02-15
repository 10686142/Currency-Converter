import React, { PureComponent } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class TopBar extends PureComponent {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand>Currency Converter</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                  <Button variant="outline-info" href="https://github.com/10686142/Currency-Converter" target="_blank">View Code</Button>
              </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default TopBar;
