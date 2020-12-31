import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  height: 616px;
  cursor: pointer;

  .hover {
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    .hover {
      transform: rotate3d(1, 1, 1, 4deg);
      opacity: 0.9;
    }
  }
`
export const Front = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  @media ${p => p.theme.size.small} {
    flex-direction: column;
    justify-content: center;
  }
`

export const Image = styled.div<{ image: string }>`
  min-width: 160px;
  max-width: 205px;
  position: relative;
  width: 100%;
  height: 100%;

  background-image: url(/assets/${p => p.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

  @media ${p => p.theme.size.small} {
    width: 160px;
    display: block;
  }
`
