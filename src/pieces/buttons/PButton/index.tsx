import './PButton.css'
import type { PButtonProps } from '../../../types/pieces_props'

const PButton = (props: PButtonProps) => {
  return <button
    className={`pbutton `+props.className}
    type='button'
    onClick={props.handleClick}
  >
    <img src={props.image.src} alt={props.image.alt} />
    <span>{props.text}</span>
  </button>
}

export default PButton