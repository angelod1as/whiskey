import Filter from './Filter'
import { Wrapper, Whiskies } from './styles'
import Whisky from './Whisky'
import { nanoid } from 'nanoid'
import { useState } from 'react'

export interface WhiskyData {
  title: string
  image: string
  cost: number
  region: string
  tasting_notes: string[]
  uri: string
}

interface MosaicProps {
  whiskies: WhiskyData[]
}

export default function Mosaic({ whiskies }: MosaicProps) {
  const [checked, setChecked] = useState('all')

  const filters = whiskies
    .map(whisky => {
      return whisky.region
    })
    .filter((whisky, index, array) => {
      return array.indexOf(whisky) === index
    })

  filters.unshift('all')

  console.log(checked)

  return (
    <Wrapper>
      <Filter {...{ filters, checked, setChecked }} />
      <Whiskies>
        {whiskies.map(whisky => {
          if (checked === 'all' || checked === whisky.region) {
            return <Whisky key={nanoid()} {...{ whisky, checked }} />
          }
          return ''
        })}
      </Whiskies>
    </Wrapper>
  )
}
