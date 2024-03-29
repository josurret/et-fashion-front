import React from 'react'
import Layout from '../components/layout'


export default class ContactUs extends React.Component {
    render() {
        return (
            <Layout>
                <section className="contact-section padding_top">
                    <div className="container">

                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Get in Touch</h2>
                            </div>
                            <div className="col-lg-8">
                                <form className="form-contact contact_form" action="contact_process.php" method="post"
                                      id="contactForm"
                                      noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">

                                      <textarea className="form-control w-100" name="message" id="message" cols="30"
                                                rows="9"
                                                placeholder='Enter Message'></textarea>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control" name="name" id="name" type="text"
                                                       placeholder='Enter your name'/>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control" name="email" id="email" type="email"
                                                       placeholder='Enter email address'/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" name="subject" id="subject" type="text"
                                                       placeholder='Enter Subject'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <a href="#" className="btn_3 button-contactForm">Send Message</a>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-home"></i></span>
                                    <div className="media-body">
                                        <h3>Bogotá, Colombia.</h3>
                                        <p>Ac. 26 #68B - 70, Bogotá</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                                    <div className="media-body">
                                        <h3>00 (440) 9865 562</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon"><i className="ti-email"></i></span>
                                    <div className="media-body">
                                        <h3>diecam@eltiempo.com</h3>
                                        <p>Send us your query anytime!</p>
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