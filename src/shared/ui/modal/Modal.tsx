import { HTMLAttributes, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import CloseIcon from '@/assets/images/svg/jam_close.svg?react'

import styles from './Modal.module.scss'

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	isOpen: boolean
	onClose: () => void
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleOutside = (e: MouseEvent | TouchEvent) => {
			if (
				isOpen &&
				modalRef.current &&
				!modalRef.current.contains(e.target as Node)
			) {
				onClose()
			}
		}
		if (isOpen) {
			document.addEventListener('mousedown', handleOutside)
		} else {
			document.removeEventListener('mousedown', handleOutside)
		}

		return () => document.removeEventListener('mousedown', handleOutside)
	}, [isOpen])

	if (!isOpen) {
		return null
	}

	return createPortal(
		<div className={styles.overlay}>
			<div ref={modalRef} className={styles.modal}>
				<CloseIcon className={styles['close-icon']} onClick={onClose} />
				{children}
			</div>
		</div>,
		document.getElementById('root-modal')!
	)
}

export default Modal
