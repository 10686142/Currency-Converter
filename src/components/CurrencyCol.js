import React, { Component } from 'react';



class CurrencyCol extends Component {

    render() {

        return (
            <div className="col">
                <div className="row">
                    Drop down {this.props.currency}
                </div>

                <div className="row">
                    Input int
                </div>
            </div>

        );
    }

}

export default CurrencyCol;
