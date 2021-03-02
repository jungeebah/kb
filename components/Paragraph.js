import { Stack, Box } from '@chakra-ui/react'
import { RichText } from 'prismic-reactjs';
import HtmlS from '../utils/HtmlSerializers'

const Paragraph = (props) => {
    return (
        <Stack mb={4}>
            <Box fontSize="0.79rem">
                <RichText render={props.children} serializeHyperlink={HtmlS} key={props.children} />
            </Box>
        </Stack>
    )
}

export default Paragraph