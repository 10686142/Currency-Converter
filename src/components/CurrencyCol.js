import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import CurrDropDown from './CurrDropDown.js';

class CurrencyCol extends Component {

    render() {
        const disabled = this.props.isEnabled ? "" : "disabled";

        return (
            <div className="col-5">
                <div className="container">
                    <div className="row rowSelectCurr">
                        <Dropdown
                            className="selectCurr"
                            onSelect={this.props.currSelected.bind(this)}
                        >

                        <Dropdown.Toggle variant="secondary"
                        id="dropdown-flags"
                        variant="outline-info"
                        disabled={disabled}
                        className="text-left" >
                            <CurrDropDown curr={this.props.currency} />
                        </Dropdown.Toggle>


                        <Dropdown.Menu>
                            {this.props.currNames.map((currName, index) => (
                            <Dropdown.Item
                            key={index}
                            eventKey={currName}
                            >
                                <CurrDropDown key={currName + index} curr={currName} />
                            </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                        </Dropdown>

                    </div>

                    <div className="row">
                        <input
                        className="inputAmount"
                        type="number"
                        value={this.props.amount}
                        onChange={this.props.onChangeAmount}
                        disabled={disabled}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export default CurrencyCol;
