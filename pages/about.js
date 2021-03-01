import { Box, Text, Image } from '@chakra-ui/react'
const About = () => {
    return (
        <Box p={4}>
            <Image src="news.svg" alt="2.flexiple" />
            <Text fontSize="xl" fontWeight="500">
                An attempt to create a small clutter free space for listing important news of the day. It's a personal
                project to keep up with the daily News that are happening in Nepal. The site just lists the major headlines that
                are being published around the web and the source of the news.
            </Text>
        </Box>
    )
}

export default About