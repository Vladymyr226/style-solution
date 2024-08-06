import { FC } from 'react'
import s from './Button.module.css'

export const Button: FC<{ content: string }> = ({ content }) => {
  return <button className={s.button}>{content}</button>
}
