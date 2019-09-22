import Document, {Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = {...initialProps};

        return props;
    }

    render() {
        return (
            <html>
            <Head>
                <link rel="icon" href="/static/assets/template/winter/img/favicon.png"/>
                <link rel="stylesheet" href="/static/assets/template/winter/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/static/assets/template/winter/css/animate.css"/>
                <link rel="stylesheet" href="/static/assets/template/winter/css/owl.carousel.min.css"/>
                <link rel="stylesheet" href="/static/assets/template/winter/css/all.css"/>
                <link rel="stylesheet" href="/static/assets/template/winter/css/flaticon.css"/>
                <link rel="stylesheet" href="/static/assets/template/winter/css/themify-icons.css"/>
                <link rel="stylesheet" href="/static/assets/template/winter/css/magnific-popup.css"/>
                <link rel="stylesheet" href="/static/assets/template/winter/css/slick.css"/>
                <link rel="stylesheet" href="/static/assets/template/winter/css/style.css"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            {/*<style dangerouslySetInnerHTML={{*/}
            {/*    __html: `.owl-carousel {display: block;}.post_slider_inner.owl-carousel > .item {*/}
            {/*            display: inline-block;*/}
            {/*            width: 25%;*/}
            {/*        }`*/}
            {/*}}></style>*/}
            </body>
            </html>
        );
    }
}