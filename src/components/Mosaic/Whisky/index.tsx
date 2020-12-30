import { nanoid } from 'nanoid'
import Image from 'next/image'
import { Whisky as WhiskyData } from '..'
import {
  Wrapper,
  Bottle,
  BG,
  Panel,
  Title,
  Region,
  Price,
  Flavours,
  Flavour,
  BackgroundImage,
} from './styles'

interface WhiskyProps {
  whisky: WhiskyData
  checked: string
}

export default function Whisky({ whisky }: WhiskyProps) {
  const { cost, image, region, tasting_notes, title, uri } = whisky

  return (
    <Wrapper>
      <BG>
        <div />
      </BG>
      <Panel>
        <Title>{title}</Title>
        <Region>{region} region</Region>
        <Price>${cost}</Price>
        <Flavours>
          {tasting_notes.map(note => (
            <Flavour key={nanoid()}>{note}</Flavour>
          ))}
        </Flavours>
      </Panel>
      <Bottle src={`/assets/${image}`} />
    </Wrapper>
  )
}
