
import { Stack } from '@chakra-ui/react'
import Today from '../components/Today'

const Home = (props) => {
  return (
    <Stack>
      <Today />
    </Stack>
  )
}

// export async function getStaticProps() {
//   const home = await client.getSingle('post')
//   return {
//     revalidate: 1,
//     props: {
//       home,
//     }
//   }
// }

export default Home
