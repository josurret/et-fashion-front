import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Categories from '../components/categories'
import Shipping from '../components/shipping'
import Featured from '../components/featured'
import axios from 'axios';
import { API } from '../core/constants';


export default class IndexPage extends React.Component {
    state = {
        categories: [],
        products: []
    };

    componentDidMount() {
        axios.get(API.base + API.api.categories)
            .then(res => {
                const categories = res.data;
                this.setState({categories});
            });

        axios.get(API.base + API.api.products)
            .then(res => {
                const products = res.data;
                this.setState({products});
            });
    }

    render() {
        return (
            <Layout>
                <Banner/>
                <Categories categories={this.state.categories}/>
                <Shipping/>
                <Featured products={this.state.products}/>
            </Layout>
        )
    }
}