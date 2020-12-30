import styled from 'styled-components'

export const Back = styled.div`
  transition: transform 0.1s ease-in-out;
  filter: contrast(60%);

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
  height: 100%;
  margin: 36px auto;

  max-width: 1000px;
  border-radius: 5px;

  a {
    display: block;

    &:hover ${Back} {
      transform: scale(1.03);
    }
  }
`

export const Margin = styled.div`
  margin: 36px;
`

export const Front = styled.div`
  border-radius: 5px;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: flex-end;
  padding-left: 36px;
  margin: 36px;
`

export const Story = styled.div`
  max-width: 500px;
`

export const StoryTitle = styled.h2`
  max-width: 400px;
`

export const StoryLead = styled.p``
