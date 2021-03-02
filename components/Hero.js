
import { Center, Text,Box } from '@chakra-ui/react'
const Hero = () => {

    return (
        <Box p={4}>
            <Center bg="blue.800" borderRadius="10px" height="200px" color="white" >
                <Text fontSize={19} fontWeight="600">
                    What is Happening Today in Nepal.
            </Text>
            </Center>
        </Box>
    )
}

export default Hero