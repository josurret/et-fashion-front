import React from 'react'
import Header from './header'
import Footer from './footer'

export const DATA_USER = 'USER';

export default class AppLayout extends React.Component {

    constructor() {
        super();
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        const user = localStorage.getItem(DATA_USER);
        this.setState({user: JSON.parse(user) || null});
    }

    responseGoogle = (response) => {
        localStorage.setItem(DATA_USER, JSON.stringify(response.profileObj));
        open('/', '_self');
    };

    logoutGoogle = () => {
        localStorage.removeItem(DATA_USER);
        this.setState({user: null});
        open('/', '_self');
    };

    render() {
        return (
            <>
                <Header
                    user={ this.state.user }
                    login={ this.responseGoogle }
                    logout={ this.logoutGoogle }  />
                {this.props.children}
                <Footer/>
            </>
        )
    }
}