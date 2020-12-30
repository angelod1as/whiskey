import Back from './Back'
import Panel from './Panel'
import { Wrapper, Front, Image } from './styles'

interface WhiskyProps {
  whisky: WhiskyData
  checked: string
}

export default function Whisky({ whisky }: WhiskyProps) {
  const { cost, image, region, tasting_notes, title, uri } = whisky
  return (
    <Wrapper>
      <Back {...{ region }} />
      <Front>
        <Panel {...{ cost, image, region, tasting_notes, title, uri }} />
        <Image>
          <img src={`/assets/${image}`} alt="" />
        </Image>
      </Front>
    </Wrapper>
  )
}
