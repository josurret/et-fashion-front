import React from "react";

export default class Featured extends React.Component {
    render() {
        return(
            <section className="instagram_photo">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="instagram_photo_iner">

                                {
                                    this.props.products.map(product =>
                                        <div className="single_instgram_photo" key={product.productId}>
                                            <img src={"/static/assets/template/winter/img/instagram/" + product.image} alt=""/>
                                            <a href="#"><i className="ti-instagram"></i></a>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}