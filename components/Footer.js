import { Stack, Box, Link, Flex } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box>
            <Flex as="footer" direction="row" marginTop="2rem" fontSize="sm">
                <Box  >
                    © {new Date().getFullYear()} Ke Bhayoo
                </Box>
                <Box pl={2} fontWeight="500" color="blue.800">
                    <Link href="/about">About US</Link>
                </Box>
            </Flex>
        </Box>
    )
}

export default Footer