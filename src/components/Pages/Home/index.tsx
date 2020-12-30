import Mosaic from '@components/Mosaic'
import Articles from '@components/Articles'
import { Container, Title } from './styles'
import { IndexProps } from '@pages/index'

interface HomeProps {
  articles: IndexProps['articles']
  whiskies: IndexProps['whiskies']
}

export default function Home({ articles, whiskies }: HomeProps) {
  return (
    <Container>
      <Title>Whiskey selection</Title>
      <Mosaic {...{ whiskies }} />
      <Articles {...{ articles }} />
    </Container>
  )
}
