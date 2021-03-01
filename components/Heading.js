import { Box, Text } from '@chakra-ui/react';

const Heading = ({ type, children }) => {
    return (
        <Box
            mt="2"
            fontWeight="semibold"
            lineHeight="tight"
        >
            <Text fontSize={type === "h1" ? "lg" : "md"}>{children}</Text>
        </Box>

    )
}

export default Heading