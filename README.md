# Two way currency converter

This project is build in Reactjs. And uses the [Foreign exchange rates API](https://exchangeratesapi.io/) to pull recent exchange rates

## Live version

You can view the live version here
[currency.vsc.app](https://currency.vsc.app/)


## How does it work
The currency converter intially pulls the exchange rates for the base rate of EUR.


#### Update either currency amount
A calculation will be made from left-to-right or from left-to-right, once 1 of the 2 input fields has changed. Here is a snippet of the calculations made:

```
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
```


#### Update right currency dropdown
When you update the right currency, a new calculation will be made what the base currency should be:

```
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
```

#### Update left currency dropdown
When you update the left currency (base currency), a new API is made to pull all the latest exchanges rates for this new base currency.:

```
baseCurrSelected = (curr) => {
    // This will re-reun our initial setup and change everything needed
    this.loadCurrencies(curr)
}
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
