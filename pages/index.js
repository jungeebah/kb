
import { Stack, ButtonGroup, Button, Center, Box } from '@chakra-ui/react'
import Today from '../components/Today';
import React from 'react'
import Hero from '../components/Hero'
import { client } from '../prismic-configuration';
import Prismic from "prismic-javascript"
import Tomorrow from '../components/Tomorrow';

const Home = (props) => {
  const [news, setNews] = React.useState('today')
  const buttonPressed = (e) => {
    setNews(e)
  }
  return (
    <Stack>
      <Hero />
      <Center>
        <ButtonGroup isAttached variant="solid" colorScheme="twitter">
          <Button borderRadius="15px 0 0 15px" isActive={news === "yesterday" ? true : false} onClick={() => buttonPressed('yesterday')}>Yesterday</Button>
          <Button borderRadius="0 15px 15px 0" isActive={news === "today" ? true : false} onClick={() => buttonPressed('today')}>Today</Button>
        </ButtonGroup>
      </Center>
      <Box p={4}>
        {news === "today" ? <Today post={props.newsPost} articles={props.newsPost[0]['data']['text']} /> : <Tomorrow articles={props.newsPost[1]['data']['text']} />}
      </Box>
    </Stack>
  )
}

export async function getStaticProps() {
  const result = await client.getSingle("test")
  const today = result['data']
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "test"),
    { orderings: "[document.last_publication_date desc]", pageSize: 50 }
  )
  const newsPost = posts.results
  return {
    revalidate: 1,
    props: {
      today,
      newsPost,
    },
  }
}


export default Home
