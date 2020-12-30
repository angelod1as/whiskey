import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'
import reset from 'styled-reset'
import { ThemeProps } from './theme'

interface GlobalProps {
  theme: ThemeProps
}

const GlobalStyle = createGlobalStyle<GlobalProps>`
  /* reset and normalize */
  ${reset}
  ${normalize}

  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Cabin', sans-serif;
  }

  * {
    box-sizing: border-box;
    z-index: 0;
  }

  p {
    font-size: 18px;
    font-weight: 300;
    line-height: 1.4em;
    margin-bottom: 1em;
  }

  // clean UL and LI
  ul, li {
    margin: 0;

    li, p {
      margin: 5px 0;
    }
  }

  h1, h2, h3 {
    margin: 20px 0;
    padding: 0;
    ${p => p.theme.font.display}
    text-transform: uppercase;
    letter-spacing: -3px;
  }

  h1 {
    font-size: 48px;
    line-height: 100%;
    font-style: italic;
  }

  h2 {
    font-size: 40px;
    line-height: 90%;
    font-style: italic;

  }

  h3 {
    font-size: 20px;
    line-height: 130%;
  }

  a {
    color: unset;
  }

  svg {
    pointer-events: none;
    & > * {
      pointer-events: none;
    }
  }

  b, strong {
    font-weight: 700;
  }

  i, em {
    font-style: italic;
  }

  hr {
    margin: 0;
  }

  /* lists */

  ul, ol {
    li {
      padding-left: 25px;
      position: relative;
      line-height: 1.2em;
      &:before {
        font-weight: 700;
        top: -1px;
        left: 5px;
        position: absolute;
      }
    }
  }

  ul {
    li {
      &:before {
        content: '\\203A';
      }
    }
  }

  ol {
    li {
      counter-increment: step-counter;
      &:before {
        content: counter(step-counter) '.';
      }
    }
  }
`

export default GlobalStyle
