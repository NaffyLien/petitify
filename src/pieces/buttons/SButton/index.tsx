import './SButton.css'
import type { PButtonProps } from '../../../types/pieces_props'

const SButton = (props: PButtonProps) => {
  return <button
    className={`sbutton `+props.className}
    type='button'
    onClick={props.handleClick}
  >
    <img src={props.image.src} alt={props.image.alt} />
    <span>{props.text}</span>
  </button>
}

export default SButton