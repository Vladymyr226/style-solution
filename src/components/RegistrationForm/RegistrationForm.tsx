import React, { ChangeEvent, FormEvent, useState } from 'react'
import validator from 'validator'
import s from './RegistrationForm.module.css'

function filterEmptyFields(data: any) {
  return Object.fromEntries(Object.entries(data).filter(([key, value]) => (value as string).trim() !== ''))
}

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    website: '',
    description: '',
    opening_hours: '',
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [success, setSuccess] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    setSuccess(false)

    const { name, address, phone, opening_hours, description } = formData

    if (name.length < 2) {
      setIsSubmitting(false)
      return setError('Назва повинна бути не менше 2 символів')
    }

    if (address.length < 2) {
      setIsSubmitting(false)
      return setError('Адреса повинна бути не менше 2 символів')
    }

    if (!validator.isMobilePhone(phone, 'uk-UA')) {
      setIsSubmitting(false)
      return setError('Введіть номер в правильному форматі: +380670000000 або 0670000000 ')
    }

    if (description.length < 2) {
      setIsSubmitting(false)
      return setError('Опис повинен бути не менше 2 символів')
    }

    if (opening_hours.length < 2) {
      setIsSubmitting(false)
      return setError('Введіть правильні часи роботи')
    }

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterEmptyFields(formData)),
      })

      const data = await response.json()

      if (data.hasOwnProperty('details')) {
        setIsSubmitting(false)
        return setError(data.details[0].message)
      }

      setSuccess(true)
      setFormData({
        name: '',
        address: '',
        phone: '',
        website: '',
        description: '',
        opening_hours: '',
      })
    } catch (error) {
      setError((error as any).message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={s.registrationForm}>
      {error && <p className={s.error}>{error}</p>}
      {success && <p className={s.success}>Дані відправлені. Очікуйте, з вами зв'яжеться адміністратор.</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Назва<span className={s.required}>*</span>:
          </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>
            Адреса<span className={s.required}>*</span>:
          </label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>
            Телефон<span className={s.required}>*</span>:
          </label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>
            Опис<span className={s.required}>*</span>:
          </label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>
            Часи роботи<span className={s.required}>*</span>:
          </label>
          <input type="text" name="opening_hours" value={formData.opening_hours} onChange={handleChange} required />
        </div>
        <div>
          <label>Вебсайт:</label>
          <input type="url" name="website" value={formData.website} onChange={handleChange} />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Відправка...' : 'Зареєструватись'}
        </button>
      </form>
    </div>
  )
}
