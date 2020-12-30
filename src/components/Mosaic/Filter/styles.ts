import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const Input = styled.input`
  display: none;
`

export const Item = styled.label<{ checked: boolean }>`
  text-transform: capitalize;
  margin: 5px;
  padding: 10px 20px;
  border: 1px solid ${p => p.theme.color.lightgray};
  color: ${p => p.theme.color.gray};
  border-radius: 20px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${p => p.theme.color.lightergray};
  }

  ${p =>
    p.checked &&
    css`
      background-color: ${p => p.theme.color.lightergray};
      color: ${p => p.theme.color.black};
    `}
`
