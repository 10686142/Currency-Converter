import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class CurrConverter extends Component {


    render() {
        return (
            <div className="mx-auto" id="currencyCard">
                <Card id="currencyCard">
                  <Card.Header as="h5">Convert</Card.Header>
                  <Card.Body>
                    Test content
                  </Card.Body>
                </Card>
            </div>
        );
    }

}


export default CurrConverter;
