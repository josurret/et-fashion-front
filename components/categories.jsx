import React from "react";

export default class Categories extends React.Component {
    render() {
        return (
            <section className="feature_part pt-4">
                <div className="container-fluid p-lg-0 overflow-hidden">
                    <div className="row align-items-center justify-content-between">
                        {
                            this.props.categories.map(categorie =>

                                <div className="col-lg-4 col-sm-6" key={categorie.categoryId}>
                                    <div className="single_feature_post_text">
                                        <img src={"/static/assets/template/winter/img/" + categorie.img} alt="#"/>
                                        <div className="hover_text">
                                            <a href="single-product.html" className="btn_2">shop
                                                for {categorie.name}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        )
    }
}