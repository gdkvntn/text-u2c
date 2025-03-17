import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

import styles from './TextButton.module.scss'

const TextButton = ({
	children,
	className,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button className={clsx(styles.button, className)} {...props}>
			{children}
		</button>
	)
}

export default TextButton
