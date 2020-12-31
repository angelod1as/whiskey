import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: ${36 + 36}px;
  text-transform: capitalize;
  align-self: flex-end;
  @media ${p => p.theme.size.small} {
    margin-bottom: 36px;
    margin-top: ${36 + 36}px;
    align-self: flex-start;
  }
`

export const Margin = styled.div`
  margin-left: ${36 + 36}px;
`

export const Title = styled.div`
  ${p => p.theme.font.display}
  font-size: 36px;
  color: ${p => p.theme.color.white};

  @media ${p => p.theme.size.small} {
    font-size: 26px;
  }
`

export const Region = styled.div`
  font-size: 18px;
  color: ${p => p.theme.color.gray};
  margin: 15px 0 30px;
`

export const Price = styled.div`
  ${p => p.theme.font.display}
  font-size: 36px;
  color: ${p => p.theme.color.white};
`

export const Flavours = styled.div<{ region: string }>`
  margin-top: 36px;
  margin-left: 10px;
  position: relative;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  color: ${p => p.theme.color.white};

  @media ${p => p.theme.size.small} {
    display: block;
    padding: 10px 20px;
  }

  &:before {
    z-index: -1;
    min-height: 60px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    content: '';
    border-radius: 5px;
    transform: skew(-10deg);
    background: ${p => `linear-gradient(
      33deg,
      ${p.theme.color[p.region].light} 0%,
      ${p.theme.color[p.region].dark} 100%
    )`};
  }
`
export const Flavour = styled.p`
  margin: 0 20px;
  padding: 0;
  font-size: 14px;

  @media ${p => p.theme.size.small} {
    margin: 10px 0;
  }
`
