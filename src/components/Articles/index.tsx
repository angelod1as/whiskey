import { nanoid } from 'nanoid'
import {
  Wrapper,
  Story,
  StoryTitle,
  StoryLead,
  Back,
  Front,
  Margin,
} from './styles'

export interface ArticleData {
  title: string
  teaser: string
  img: string
  url: string
}

interface ArticleProps {
  articles: ArticleData[]
}

export default function Articles({ articles }: ArticleProps) {
  return (
    <Wrapper>
      <Margin>
        {articles.map(article => (
          <a key={nanoid()} href={article.url} target="_blank" rel="noreferrer">
            <Front>
              <Story>
                <StoryTitle>{article.title}</StoryTitle>
                <StoryLead>{article.teaser}</StoryLead>
              </Story>
            </Front>

            <Back image={article.img}>
              <div />
            </Back>
          </a>
        ))}
      </Margin>
    </Wrapper>
  )
}
