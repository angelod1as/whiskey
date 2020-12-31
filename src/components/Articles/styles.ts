import styled from 'styled-components'

export const Back = styled.div<{ image: string }>`
  transition: transform 0.1s ease-in-out;
  filter: contrast(60%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  background-image: url(/assets/${p => p.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;

  div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
    border-radius: 5px;
  }
  img {
    display: block;
    border-radius: 5px;
    width: 100%;
    height: auto;
  }
`

export const Wrapper = styled.div`
  z-index: 0;
  position: relative;
  color: white;
  height: 500px;
  margin: ${36 + 36 / 2}px;
  @media ${p => p.theme.size.small} {
    margin: ${12 + 12 / 2}px;
  }

  border-radius: 5px;

  a {
    display: block;
    text-decoration: none;

    &:hover ${Back} {
      transform: scale(1.03);
    }
  }
`

export const Margin = styled.div`
  margin: 36px;
  display: flex;
  align-items: flex-end;
  height: 100%;

  @media ${p => p.theme.size.small} {
    margin: 12px;
  }
`

export const Front = styled.div`
  border-radius: 5px;
  z-index: 1;

  display: flex;
  align-items: flex-end;

  @media ${p => p.theme.size.small} {
    padding: 0;
    margin: 0;
  }
`

export const Story = styled.div`
  max-width: 500px;
`

export const StoryTitle = styled.h2`
  max-width: 400px;
`

export const StoryLead = styled.p``
