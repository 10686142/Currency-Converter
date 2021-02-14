import React, { PureComponent } from 'react';

class CurrDropDown extends PureComponent {

    render() {
        return (
            <React.Fragment>
            <div>{this.props.curr.toLowerCase()} </div>
            </React.Fragment>

        );
    }
}

export default CurrDropDown;


//
