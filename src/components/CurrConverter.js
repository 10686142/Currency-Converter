import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CurrencyCol from './CurrencyCol.js';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import currencyToSymbolMap from 'currency-symbol-map/map'


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
          currRates: {},
          errorMessage: ''
      };
    }

    componentDidMount() {
        // Make initial API call
        this.loadCurrencies(this.state.baseCurr);
    }

    // Make API call with specified base currency to convert from
    loadCurrencies = (baseQuery) => {
        //
        axios.get(`/latest?base=${baseQuery}`)
        .then(res => {
            this.parseCurrApiData(res.data)
        })
        .catch(err => {
            // Store custom eror message
            let errMesg;

            // client received an error response (5xx, 4xx)
            if (err.response) {
                errMesg = `Client ${err.status} error. Message: ${err.message}`;
            }
            // client never received a response, or request never left
            else if (err.request) {
                errMesg = `Could not send request. Message: ${err.message}`;
            }
            // anything else
            else {
                errMesg = err.message
            }
            console.error(errMesg);
            this.setState({errorMessage: errMesg});
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

    baseAmountChanged= (e) => {
        this.updateAmounts(true, e.target.value);
    }

    toAmountChanged = (e) => {
        this.updateAmounts(false, e.target.value);
    }

    baseCurrSelected = (curr) => {
        // This will re-reun our initial setup and change everything needed
        this.loadCurrencies(curr)
    }


    // No api calle needed, we need to change the exchange
    // rate from the dictionary and update the currency and amount shown
    toCurrSelected = (curr) => {
        const newExRate = this.state.currRates[curr];
        const baseAmount = this.state.baseAmount;

        // Update exchange rate and the currency name
        this.setState({
            toCurr: curr,
            exchangeRate: newExRate,
            toAmount: baseAmount * newExRate
        });
    }


    render() {
        // Change UI if api call went wrong
        const errPresent = this.state.errorMessage === "" ? false : true;

        // Grabs the right ASCII currency symbol/sign, e.g. USD -> $
        const baseCurrSign = currencyToSymbolMap[this.state.baseCurr];
        const toCurrSign = currencyToSymbolMap[this.state.toCurr];

        return (

            <div className="mx-auto" id="currencyCardWrapper">
                {errPresent &&  <Alert variant="danger">{this.state.errorMessage}</Alert>}
                <Card id="currencyCard">
                  <Card.Header as="h5">Two way currency convertion</Card.Header>
                  <Card.Body>
                    <div className="row">
                        <CurrencyCol
                            currNames={this.state.currNames}
                            currency={this.state.baseCurr}
                            amount={this.state.baseAmount}
                            currSelected={this.baseCurrSelected}
                            onChangeAmount={this.baseAmountChanged}
                            isBase={true}
                            isEnabled={!errPresent}
                            currSign={baseCurrSign}
                            key="base"
                        />
                        <CurrencyCol
                            currNames={this.state.currNames}
                            currency={this.state.toCurr}
                            amount={this.state.toAmount}
                            currSelected={this.toCurrSelected}
                            onChangeAmount={this.toAmountChanged}
                            isBase={false}
                            isEnabled={!errPresent}
                            currSign={toCurrSign}
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
