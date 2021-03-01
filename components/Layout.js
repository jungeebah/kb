import { Stack, Container } from '@chakra-ui/react'
import Header from './Header'

const Layout = ({ children, config }) => {
    return (
        <Container maxW="container.lg">
            <Stack>
                <Header config={config} />
                {children}
            </Stack>
        </Container>
    )
}

export default Layout