import { useState } from 'react'

import '@/assets/styles/global.scss'

import styles from './App.module.scss'
import { Calculation } from './components'
import { Button } from './shared/ui'
import Modal from './shared/ui/modal/Modal'

function App() {
	const [isOpenModal, setIsOpenModal] = useState<boolean>(true)

	return (
		<div className={styles.container}>
			<Button onClick={() => setIsOpenModal(true)} typeButton='outline'>
				Расчет платежей
			</Button>
			<Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
				<Calculation />
			</Modal>
		</div>
	)
}
export default App
