import { Article } from '@components/Articles'
import { Whisky } from '@components/Mosaic'
import Home from '@components/Pages/Home'
import axios from 'axios'

export interface IndexProps {
  whiskies: Whisky[]
  articles: Article[]
}

export default function Index({ whiskies, articles }: IndexProps) {
  return <Home {...{ whiskies, articles }} />
}

export async function getStaticProps() {
  const { NODE_ENV, NEXT_PUBLIC_DEV_URL, NEXT_PUBLIC_PROD_URL } = process.env
  const url =
    NODE_ENV === 'development' ? NEXT_PUBLIC_DEV_URL : NEXT_PUBLIC_PROD_URL

  const getData = async (filename: string) => {
    const path = `${url}/data/${filename}.json`
    const data = await axios.get(path)
    return data.data
  }

  const articles: Article[] = await getData('articles')
  const whiskies: Whisky[] = await getData('whiskies')

  return {
    props: {
      articles,
      whiskies,
    },
  }
}
