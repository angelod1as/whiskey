import { WhiskyData } from '..'
import Back from './Back'
import Panel from './Panel'
import Link from 'next/link'
import { Wrapper, Front, Image } from './styles'

interface WhiskyProps {
  whisky: WhiskyData
}

export default function Whisky({ whisky }: WhiskyProps) {
  const { cost, image, region, tasting_notes, title, uri } = whisky

  return (
    <Link href={uri}>
      <Wrapper>
        <Back {...{ region }} />
        <Front>
          <Panel {...{ cost, region, tasting_notes, title }} />
          <Image {...{ image }} />
        </Front>
      </Wrapper>
    </Link>
  )
}
