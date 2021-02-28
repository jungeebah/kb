import { Stack, Container, ButtonGroup, Button, Center, Box } from '@chakra-ui/react'
import Header from './Header'
import Hero from './Hero'
const Layout = ({ children, config }) => {
    return (
        <Container maxW="container.lg">
            <Stack>
                <Header config={config} />
                <Hero />
                <Center>
                    <ButtonGroup isAttached variant="solid" colorScheme="twitter">
                        <Button borderRadius="15px 0 0 15px">Yesterday</Button>
                        <Button borderRadius="0 15px 15px 0" isActive>Today</Button>
                    </ButtonGroup>
                </Center>
                <Box p={4}>
                    {children}
                </Box>
            </Stack>
        </Container>
    )
}

export default Layout