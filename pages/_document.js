import Document, { Head, Main, NextScript, Html } from 'next/document'

export default class SiteDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                    <link rel="manifest" href="/favicons/site.webmanifest" />
                    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#ffc40d" />
                    <meta name="theme-color" content="#ffffff" />
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