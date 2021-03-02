import {
    Flex,
    Box,
    Text,
    useColorMode,
    IconButton,
    Link,
    Spacer
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AiFillHome } from 'react-icons/ai'


const Header = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box p={4}>
            <Flex direction="row" justify="space-between">
                <Text fontWeight="700" fontSize="3xl">
                    <Link href="/">
                        {props.config.title}
                    </Link>
                </Text>
                <Flex direction="row">
                    <Link href="/">
                        <IconButton arial-label="Home" icon={<AiFillHome />} />
                    </Link>
                    <Spacer m={2}/>
                    <IconButton aria-label="Search database" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
                </Flex>
            </Flex>
        </Box>
    )
}

export default Header