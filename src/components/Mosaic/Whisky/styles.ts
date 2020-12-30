import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 544px;
`

export const Bottle = styled.img`
  width: auto;
  height: auto;
  max-height: 600px;
  min-width: 160px;
`

export const BG = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 32px;

  > div {
    position: relative;
    width: 100%;
    height: 100%;

    border-radius: 5px;

    background-image: url('/assets/card-bg.svg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

    &:before {
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      content: ' ';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      border-radius: 5px;

      background: rgb(0, 0, 0);
      background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(57, 57, 57, 1) 44%,
        rgba(0, 0, 0, 1) 100%
      );
    }
  }
`

export const BackgroundImage = styled.img`
  /* transform: rotate(-90deg) scaleY(-1);
  width: 100%;
  height: 100%;
  min-width: 270px;
  height: auto;
  position: absolute;
  left: 0;
  top: 0; */
`

export const Panel = styled.div``
export const Title = styled.div``
export const Region = styled.div``
export const Price = styled.div``
export const Flavours = styled.div``
export const Flavour = styled.div``
