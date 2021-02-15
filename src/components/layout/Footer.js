import React, { PureComponent } from 'react';

class Footer extends PureComponent {

    render() {
        return (
            <footer className="footer">
                <div className="d-flex justify-content-center">
                    <span className="text-muted">Made with
                        <span id="heart">&nbsp;&hearts;&nbsp;</span>
                        by <a href="https://github.com/10686142" target="_blank" rel="noreferrer">Vasco</a>
                    </span>
              </div>
            </footer>
        );
    }

}


export default Footer;
