import { FlattenSimpleInterpolation } from 'styled-components'
import { css } from './styled-components'

const color = {
  white: '#FFFFFF',
  black: '#000000',
  gray: '#CCCCCC',
  darkgray: '#A9A9A9',
  darkergray: '#8B8B8B',
  islands: {
    light: '#D71E44',
    dark: '#9E1B34',
  },
  islay: {
    light: '#A5238E',
    dark: '#6E2671',
  },
  highlands: {
    light: '#563494',
    dark: '#322773',
  },
  lowlands: {
    light: '#0663AE',
    dark: '#174272',
  },
  speyside: {
    light: '#1AB467',
    dark: '#007B46',
  },
  campbeltown: {
    light: '#F3B41B',
    dark: '#D29D2A',
  },
}

const font = {
  display: css`
    font-family: 'Cabin', sans-serif;
    font-weight: bold;
  `,
  text: css`
    font-family: 'Cabin', sans-serif;
    font-weight: regular;
  `,
}

const size = {
  large: `(max-width: 1400px)`,
  medium: `(max-width: 1100px)`,
  small: `(max-width: 600px)`,
}

const numbers = {
  radius: 0,
}

export interface ThemeProps {
  size: { [key in keyof typeof size]: string }
  color: { [key in keyof typeof color]: string | { [index: string]: string } }
  font: { [key in keyof typeof font]: FlattenSimpleInterpolation }
  numbers: { [key in keyof typeof numbers]: string | number }
}

export const theme: ThemeProps = {
  size,
  color,
  font,
  numbers,
}

export default theme
