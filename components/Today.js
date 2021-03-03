import { Box } from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import HtmlS from '../utils/HtmlSerializers'

const Today = (props) => {
    return (
        <Box p={4} borderWidth="1px" borderRadius="lg" key={props.articles[0]['text']}>
            <Box>
                <RichText render={props.articles} htmlSerializer={HtmlS} key={props.articles[0]['text']} />
            </Box>
        </Box >
    )
}



export default Today