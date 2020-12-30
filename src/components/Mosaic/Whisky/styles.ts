import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  height: 616px;

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
`

export const Image = styled.div`
  min-width: 160px;
  max-width: 205px;
  position: relative;
  img {
    width: auto;
    height: auto;
    max-height: 616px;
  }
`
