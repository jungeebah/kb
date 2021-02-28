import { Text, Box } from '@chakra-ui/react'

const Today = () => {
    return (
        <Box p={4} borderWidth="1px" borderRadius="lg">
            <Box >
                <Box
                    mt="1"
                    fontWeight="semibold"
                    lineHeight="tight"
                >
                    <Text fontSize="lg">Something happened in Kathmandu Nepal</Text>
                </Box>
                <Box mt="" as="span" color="gray.600" fontSize="sm" isTruncated>
                    Source
                    </Box>
            </Box>
            <Box >
                <Box
                    mt="3"
                    fontWeight="semibold"
                    lineHeight="tight"
                    isTruncated
                >
                    <Text fontSize="lg">Something big happened in Kaski</Text>
                </Box>
                <Box as="span" color="gray.600" fontSize="sm" mt="1">
                    Source()
                    </Box>
            </Box>
            <Box >
                <Box
                    mt="3"
                    fontWeight="semibold"
                    as="h2"
                    lineHeight="tight"
                    isTruncated
                >
                    <Text fontSize="lg">Something big happened in jumla</Text>
                </Box>
                <Box as="span" color="gray.600" fontSize="sm">
                    Source()
                    </Box>
            </Box>
        </Box>
    )
}

export default Today