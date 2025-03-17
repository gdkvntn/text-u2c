import { useEffect, useState } from 'react'

import styles from './Calculation.module.scss'
import { Button, Input, Tag, TextButton } from '@/shared/ui'

const quantityMonth: number[] = [12, 24, 36, 48]
const periods: Array<{ title: string; value: number }> = [
	{ title: 'в год', value: 12 },
	{ title: 'в месяц', value: 1 }
]

const Calculation = () => {
	const [sum, setSum] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [selectedQuanityMonth, setSelectedQuanityMonth] = useState<number>(
		quantityMonth[0]
	)
	const [selectedPeriods, setSelectedPeriods] = useState<number>(
		periods[1].value
	)
	const [total, setTotal] = useState<number>(0)

	const handleCalculation = () => {
		if (!sum.length) {
			setError('Поле обязательно для заполнения')
			setTotal(0)
			return
		}
		const totalMonth = Math.round(
			Number(sum) / (selectedQuanityMonth / selectedPeriods)
		)

		setTotal(totalMonth)
	}

	useEffect(() => {
		if (sum.length) handleCalculation()
	}, [selectedPeriods])

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Платежи по кредиту</h2>
			<div className={styles.description}>
				<p>
					Введите сумму кредита и выберите срок, на который вы хотите его
					оформить.
				</p>
				<p>
					Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли
					лучше спланировать свои финансы.
				</p>
			</div>
			<div className={styles.body}>
				<Input
					onFocus={() => setError('')}
					error={error}
					value={sum}
					onChange={e => setSum(e.target.value)}
					placeholder='Введите данные'
					type='number'
					label='Ваша сумма кредита'
				/>
				<TextButton onClick={handleCalculation} className={styles.calc}>
					Рассчитать
				</TextButton>
				<div className={styles['quality-month']}>
					<span>Количество месяцев?</span>
					<div className={styles['quality-month-picker']}>
						{quantityMonth.map(num => (
							<Tag
								onClick={() => setSelectedQuanityMonth(num)}
								key={num}
								active={selectedQuanityMonth === num}
								text={num.toString()}
							/>
						))}
					</div>
				</div>
			</div>

			{!!total && (
				<div className={styles.total}>
					<p className={styles['total-text']}>Итого ваш платеж по кредиту:</p>
					<div className={styles['total-picker']}>
						{periods.map(period => (
							<Tag
								onClick={() => setSelectedPeriods(period.value)}
								key={period.title}
								active={selectedPeriods === period.value}
								text={period.title}
							/>
						))}
					</div>
					<p className={styles['total-price']}>{total} рублей</p>
				</div>
			)}

			<Button className={styles['add-button']}>Добавить</Button>
		</div>
	)
}

export default Calculation
