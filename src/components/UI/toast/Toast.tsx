import { FC } from 'react'
import './Toast.scss'
import { Success } from '../icons/Success'

interface IToast {
	text?: string
	variant: 'small' | 'regular' | 'large'
}

export const Toast: FC<IToast> = ({ text, variant }) => {
	return (
		<div className={`toast ${variant}`}>
			<Success className='toast__icon'/>
			<p className='toast__text'>{text}</p>
		</div>
	)
}
