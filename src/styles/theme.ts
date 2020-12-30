import { css } from "./styled-components"

const color = {
  color: '#333333',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#CCCCCC',
  darkgray: '#A9A9A9',
  darkergray: '#8B8B8B',
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
  color: { [key in keyof typeof color]: string }
  font: { [key in keyof typeof font]: string }
  numbers: { [key in keyof typeof numbers]: string | number }
}

export const theme: ThemeProps = {
  size,
  color,
  font,
  numbers,
}

export default theme
