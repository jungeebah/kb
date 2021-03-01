import { Box } from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import HtmlS from '../utils/HtmlSerializers'


const Yesterday = (props) => {
    return (
        <Box p={4} borderWidth="1px" borderRadius="lg">
            <Box>
                <RichText render={props.articles} htmlSerializer={HtmlS} key={props.articles} />
            </Box>
        </Box>
    )
}



export default Yesterday