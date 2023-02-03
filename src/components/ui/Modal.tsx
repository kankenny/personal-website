import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Socials from './Socials'

type BackdropProps = {
	onClose: React.MouseEventHandler<HTMLDivElement>
}

const Backdrop = ({ onClose }: BackdropProps) => {
	return <div className="backdrop" onClick={onClose} />
}

type ModalOverlayProps = {
	children: React.ReactNode
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
	return (
		<div className="modal">
			<div
				onClick={(e) => e.stopPropagation()}
				className="h-full w-full overflow-scroll overflow-x-hidden"
			>
				{children}
			</div>
		</div>
	)
}

let portalElement: HTMLElement

if (typeof window !== 'undefined') {
	portalElement = document.getElementById('portal')!
}

type ModalProps = {
	onClose: React.MouseEventHandler<HTMLDivElement>
}

const Modal = ({ onClose }: ModalProps) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClose={onClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>
					<Socials />
				</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	)
}

export default Modal
