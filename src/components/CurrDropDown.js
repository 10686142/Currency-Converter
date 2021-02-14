import React, { PureComponent } from 'react';

class CurrDropDown extends PureComponent {

    render() {
        return (
            <React.Fragment>
            <div className={"currency-flag currency-flag-" + this.props.curr.toLowerCase()} />
            {this.props.curr}
            </React.Fragment>

        );
    }
}

export default CurrDropDown;
