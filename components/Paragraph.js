import { Stack } from '@chakra-ui/react'
import { RichText } from 'prismic-reactjs';
import HtmlS from '../utils/HtmlSerializers'

const Paragraph = (props) => {
    return (
        <Stack>
            <RichText render={props.children} serializeHyperlink={HtmlS} />
        </Stack>
    )
}

export default Paragraph