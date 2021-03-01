import { Stack, Container } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, config }) => {
    return (
        <Container maxW="container.lg">
            <Stack>
                <Header config={config} />
                {children}
                <Footer />
            </Stack>
        </Container>
    )
}

export default Layout