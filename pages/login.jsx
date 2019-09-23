import React from 'react'
import Layout from '../components/layout'

export default class Login extends React.Component {

    state = {
        user: null
    };

    render() {
        const { user } = this.state;

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