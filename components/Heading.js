import { Box, Text } from '@chakra-ui/react';

const Heading = ({ type, children }) => {
    return (
        <Box
            mt="2"
            fontWeight="semibold"
            lineHeight="tight"
            key={children}
        >
            <Text fontSize={type === "h1" ? "lg" : "md"} key={children}>{children}</Text>
        </Box>

    )
}

export default Heading