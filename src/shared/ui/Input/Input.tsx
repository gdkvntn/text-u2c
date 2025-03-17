import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string
	label: string
}

const Input = ({ label, error, className, ...props }: InputProps) => {
	return (
		<div className={styles.container}>
			<label className={styles.label}>{label}</label>
			<div className={styles.wrapper}>
				<input
					className={clsx(styles.input, className, {
						[styles.error]: !!error
					})}
					placeholder='asdas'
					{...props}
				/>
				{error && <p className={styles['error-text']}>{error}</p>}
			</div>
		</div>
	)
}

export default Input
