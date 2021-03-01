import { Link } from '@chakra-ui/react'

const Links = (props) => {
    return (
        <Link href={props.url} isExternal color="red.500" fontWeight="500" key={props.url}> {props.children}</Link>
    )
}

export default Links