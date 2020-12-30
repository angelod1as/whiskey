import { nanoid } from 'nanoid'
import {
  Wrapper,
  Margin,
  Title,
  Region,
  Price,
  Flavours,
  Flavour,
} from './styles'

export default function Panel({ title, region, cost, tasting_notes }) {
  return (
    <Wrapper>
      <Margin>
        <Title>{title}</Title>
        <Region>{region} region</Region>
        <Price>${cost}</Price>
      </Margin>
      <Flavours region={region}>
        {tasting_notes.map((note: string) => (
          <Flavour key={nanoid()}>{note}</Flavour>
        ))}
      </Flavours>
    </Wrapper>
  )
}
