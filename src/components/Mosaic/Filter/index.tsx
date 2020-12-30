import { nanoid } from 'nanoid'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { Wrapper, Item, Input } from './styles'

interface FilterProps {
  filters: string[]
  checked: string
  setChecked: Dispatch<SetStateAction<string>>
}

export default function Filter({ filters, checked, setChecked }: FilterProps) {
  const handleChange = useCallback(
    e => {
      setChecked(e.target.value.toLowerCase())
    },
    [setChecked]
  )

  return (
    <Wrapper>
      {filters.map(filter => (
        <Item key={nanoid()} htmlFor={filter} checked={checked === filter}>
          {filter}
          <Input
            type="radio"
            checked={filter === checked}
            value={filter}
            onChange={handleChange}
            id={filter}
            name="filter"
          />
        </Item>
      ))}
    </Wrapper>
  )
}
