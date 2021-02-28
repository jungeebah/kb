import Document, { Head, Main, NextScript, Html } from 'next/document'

export default class SiteDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <div className="root">
                        <Main />
                    </div>
                    <NextScript />
                </body>
            </Html>
        )
    }
}