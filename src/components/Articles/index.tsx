import { Wrapper } from './styles'

export interface Article {
  title: string
  teaser: string
  img: string
  url: string
}

interface ArticleProps {
  articles: Article[]
}

export default function Articles({ articles }) {
  return (
    <Wrapper>
      {/* <Story>
        <StoryTitle>
          The best whiskies from Scotland
        </StoryTitle>
        <StoryLead>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, beatae est. Inventore neque earum totam accusamus eum eaque rem vel nostrum adipisci, necessitatibus beatae, laborum velit laudantium culpa qui vero?
        </StoryLead>
      </Story> */}
    </Wrapper>
  )
}
