import clsx from 'clsx'
import { ButtonHTMLAttributes } from 'react'

import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	typeButton?: 'fill' | 'outline'
}

const Button = ({
	typeButton = 'fill',
	className,
	children,
	...props
}: ButtonProps) => {
	return (
		<button
			className={clsx(
				styles[`button-${typeButton}`],

				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
