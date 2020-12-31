import styled from 'styled-components'

export const Container = styled.div`
  padding: 36px;
  @media ${p => p.theme.size.small} {
    padding: 12px;
  }
`

export const Title = styled.h1`
  font-style: italic;
  text-align: center;
  margin: 50px 0;
`
