import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../components/Layout'
import config from '../config.json'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider resetCSS>
            <Head>
                <title>
                    {config.title}
                </title>
                <meta name="keywords" content="News,Nepal News" />
            </Head>
            <Layout config={config}>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

export default MyApp