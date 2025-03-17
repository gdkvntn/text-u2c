import clsx from 'clsx'
import { HTMLAttributes } from 'react'

import styles from './Tag.module.scss'

interface TagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
	text: string
	span?: string
	active?: boolean
}

const Tag = ({ text, active, span, ...props }: TagProps) => {
	return (
		<div className={clsx(styles.tag, { [styles.active]: active })} {...props}>
			<p>
				{text}
				{span && <span>{span}</span>}
			</p>
		</div>
	)
}

export default Tag
