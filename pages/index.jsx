import React from 'react'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Categories from '../components/categories'
import Shipping from '../components/shipping'
import Featured from '../components/featured'
import axios from 'axios';


export default class IndexPage extends React.Component {
    state = {
        categories: [],
        products: []
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:3000/api/categories`)
            .then(res => {
                const categories = res.data;
                this.setState({categories});
            }).catch(err => {
            console.log(err)
        })

        axios.get(`http://127.0.0.1:3000/api/products`)
            .then(res => {
                const products = res.data;
                this.setState({products});
            }).catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log('toma')
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