import React from 'react';

import logo from '../logo.svg';

const center = {
    textAlign: 'center'
};

class Header extends React.Component{

    render() {
        return(
            <header>
                <h1 style={center}>Anton Kolesnykov </h1>
            </header>
        )
    }
}

export default Header;
