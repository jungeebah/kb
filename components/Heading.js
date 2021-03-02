import { Box, Text } from '@chakra-ui/react';

const Heading = ({ type, children }) => {
    return (
        <Box
            mt="2"
            fontWeight="semibold"
            lineHeight="tight"
            key={type}
        >
            <Text fontSize={type === "h1" ? "lg" : "md"} key={type}>{children}</Text>
        </Box>

    )
}

export default Heading