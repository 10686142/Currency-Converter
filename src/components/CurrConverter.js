import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CurrencyCol from './CurrencyCol.js';
import axios from 'axios';

class CurrConverter extends Component {

    constructor(props) {
      super(props);
      this.state = {
          baseIsLeft: true,
          baseAmount: 1.0,
          toAmount: 1.0,
          baseCurr: "EUR",
          toCurr: "USD",
          exchangeRate: 1.0,
          currNames: [],
          currRates: {}
      };
    }

    componentDidMount() {
      this.loadCurrencies(this.state.baseCurr);
    }

    // TODO: Handle errors
    loadCurrencies = (baseQuery) => {
        //
        axios.get(`/latest?base=${baseQuery}`)
        .then(res => {
            this.parseCurrApiData(res.data)
        })
        .catch(err => {
            // client received an error response (5xx, 4xx)
            if (err.response) {

            }
            // client never received a response, or request never left
            else if (err.request) {

            }
            // anything else
            else {

            }
        })
    }

    parseCurrApiData = (apiData) => {
        // Set all data so we won't have to make antoher call
        this.setState({
            baseCurr: apiData.base,
            currNames: [ apiData.base, ...Object.keys(apiData.rates)],
            currRates: apiData.rates,
            exchangeRate: apiData.rates[this.state.toCurr]
        });

        // Update amounts
        this.updateAmounts(true, this.state.baseAmount);
    }

    updateAmounts = (baseIsUpdated, newAmount) => {
        // Set as constant so we don't reference state,
        // when we set new state elements
        const exRate = this.state.exchangeRate;

        if (baseIsUpdated){
            this.setState({
                baseAmount: newAmount,
                toAmount: newAmount * exRate
            });
        }else{
            this.setState({
                baseAmount: newAmount / exRate,
                toAmount: newAmount
            });
        }
    }


    currSelected = (curr) => {
      alert(curr);
    }

    render() {
        return (
            <div className="mx-auto" id="currencyCardWrapper">
                <Card id="currencyCard">
                  <Card.Header as="h5">Let's start converting</Card.Header>
                  <Card.Body>
                    <div className="row">
                        <CurrencyCol
                            currNames={this.state.currNames}
                            currency={this.state.baseCurr}
                            amount={this.state.baseAmount}
                            currSelected={this.currSelected}
                            onChangeAmount={this.baseAmountChanged}
                            isBase={true}
                            key="base"
                        />
                        <CurrencyCol
                            currNames={this.state.currNames}
                            currency={this.state.toCurr}
                            amount={this.state.toAmount}
                            currSelected={this.currSelected}
                            onChangeAmount={this.toAmountChanged}
                            isBase={false}
                            key="to"
                        />
                    </div>
                  </Card.Body>
                </Card>
            </div>
        );
    }

}


export default CurrConverter;
