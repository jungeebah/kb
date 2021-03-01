import {
    Flex,
    Box,
    Text,
    useColorMode,
    IconButton, Link
} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'


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
                <IconButton aria-label="Search database" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={toggleColorMode} />
            </Flex>
        </Box>
    )
}

export default Header