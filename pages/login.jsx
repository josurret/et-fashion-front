import React from 'react'
import Layout from '../components/layout'
import {GoogleLogin} from 'react-google-login'
import {GoogleLogout} from 'react-google-login';
import {Router} from '../routes'

const responseGoogle = (response) => {
    // console.log(response.profileObj);
    localStorage.setItem('userName', response.profileObj.givenName);
    Router.pushRoute('/')
}

const logoutGoogle = () => {
    localStorage.removeItem('userName');
    Router.pushRoute('/')
}

export default class Login extends React.Component {

    state = {
        usaerName: null
    }

    componentDidMount() {
        var userName = localStorage.getItem('userName');
        console.log("userData-->", userName)
        this.setState({userName: userName})
    }

    render() {
        const {userName} = this.state

        return (
            <Layout>
                <section className="login_part section_padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="login_part_text text-center">
                                    <div className="login_part_text_iner">
                                        <h2>New to our Shop?</h2>
                                        <p>There are advances being made in science and technology
                                            everyday, and a good example of this is the</p>
                                        <a href="#" className="btn_3">Create an Account</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="login_part_form">
                                    <div className="login_part_form_iner">
                                        <h3>Welcome Back ! <br></br>
                                            Please Sign in now</h3>
                                        <form className="row contact_form" action="#" method="post"
                                              noValidate="novalidate">
                                            {
                                                userName != null ?
                                                    <GoogleLogout
                                                        clientId="346658604757-8lt4al8por29og57s5qq2lpo8imcm57a.apps.googleusercontent.com"
                                                        buttonText="Logout"
                                                        onLogoutSuccess={logoutGoogle}
                                                    >
                                                    </GoogleLogout> :

                                                    <GoogleLogin
                                                        clientId="346658604757-8lt4al8por29og57s5qq2lpo8imcm57a.apps.googleusercontent.com"
                                                        buttonText="Login"
                                                        onSuccess={responseGoogle}
                                                        onFailure={responseGoogle}
                                                        cookiePolicy={'none'}
                                                    />
                                            }


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>

        )
    }
}