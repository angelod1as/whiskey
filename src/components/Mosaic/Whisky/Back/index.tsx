import { BG, Upper, Middle, Bottom } from './styles'

export default function Back({ region }) {
  return (
    <BG>
      <Upper region={region} />
      <Middle className="hover" />
      <Bottom region={region} className="hover" />
    </BG>
  )
}
