import { BG, Upper, Middle, Bottom } from './styles'

export default function Back({ region }) {
  return (
    <BG>
      <div className="relative">
        <Upper region={region} />
        <Middle className="hover" />
        <Bottom region={region} className="hover" />
      </div>
    </BG>
  )
}
