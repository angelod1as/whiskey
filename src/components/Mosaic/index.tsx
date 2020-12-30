import { Wrapper } from './styles'

export interface Whisky {
  title: string
  image: string
  cost: number
  region: string
  tastingNotes: string[]
  uri: string
}

interface MosaicProps {
  whiskies: Whisky[]
}

export default function Mosaic({ whiskies }: MosaicProps) {
  return (
    <Wrapper>
      {/* <Mosaic>
        <Filter>
        </Filter>
        <Whiskies>
        </Whiskies>
      </Mosaic> */}
    </Wrapper>
  )
}
