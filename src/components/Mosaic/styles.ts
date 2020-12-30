import styled from 'styled-components'

export const Wrapper = styled.div``

export const Whiskies = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 36px;

  @media ${p => p.theme.size.small} {
    display: block;
  }
`
