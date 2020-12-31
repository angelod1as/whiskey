import styled from 'styled-components'

export const BG = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 36px;
  @media ${p => p.theme.size.small} {
    margin: 12px;
  }
`

export const Upper = styled.div<{ region: string }>`
  z-index: -1;
  position: absolute;
  right: -16px;
  top: 32px;
  content: '';

  width: 100%;
  max-width: 80px;
  height: 4px;
  background: ${p => `linear-gradient(
    33deg,
    ${p.theme.color[p.region].light} 0%,
    ${p.theme.color[p.region].dark} 100%
  )`};
`

export const Middle = styled.div`
  z-index: -2;
  position: absolute;
  width: 100%;
  height: 100%;

  border-radius: 5px;

  background-image: url('/assets/card-bg.svg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Bottom = styled.div<{ region: string }>`
  z-index: -3;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: '';

  border-radius: 5px;

  background: rgb(15, 15, 15);
  background: linear-gradient(
    45deg,
    rgba(15, 15, 15, 1) 0%,
    rgba(57, 57, 57, 1) 44%,
    rgba(15, 15, 15, 1) 100%
  );
`
