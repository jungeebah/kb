import { Box, Flex, Text, Spacer, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

const About = () => {
    return (
        <Flex p={4} direction="column" justifyContent="center">
            <Flex height="350px" borderWidth="1px" borderRadius="lg" bg="#f4f4f4" justifyContent="center">
                <Image src="/news.svg" alt="2.flexiple" height="400px" width="450px" />
            </Flex>
            <Spacer mt={9}/>
            <Box p={1}>
                <Text fontSize="xl" fontWeight="500">
                    An attempt to create a small clutter free space for listing important news of the day. It's a personal
                    project to keep up with the daily News that are happening in Nepal. The site just lists the major headlines that
                    are being published around the web and the source of the news.
            </Text>
            </Box>
        </Flex >
    )
}

export default About