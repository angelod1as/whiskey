import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px;
`

export const Title = styled.h1`
  ${p => p.theme.font.display}
  font-style: italic;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -5px;
  margin: 50px 0;
`
