import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CurrencyCol from './CurrencyCol.js';

class CurrConverter extends Component {

    constructor(props) {
      super(props);
      this.state = {
          baseCurr: "EUR",
          toCurr: "USD",
      };
    }

    render() {
        return (
            <div className="mx-auto" id="currencyCardWrapper">
                <Card id="currencyCard">
                  <Card.Header as="h5">Let's start converting</Card.Header>
                  <Card.Body>
                    <div className="row">
                        <CurrencyCol
                        curr={this.state.currency}
                        isBase={true}
                        />
                        <CurrencyCol
                        curr={this.state.currency}
                        isBase={false}
                        />
                    </div>
                  </Card.Body>
                </Card>
            </div>
        );
    }

}


export default CurrConverter;
