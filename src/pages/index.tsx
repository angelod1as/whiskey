import { ArticleData } from '@components/Articles'
import { WhiskyData } from '@components/Mosaic'
import Home from '@components/Pages/Home'
import axios from 'axios'

export interface IndexProps {
  whiskies: WhiskyData[]
  articles: ArticleData[]
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

  const articles: ArticleData[] = await getData('articles')
  const whiskies: WhiskyData[] = await getData('whiskies')

  return {
    props: {
      articles,
      whiskies,
    },
  }
}
