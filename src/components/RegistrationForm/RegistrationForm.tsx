import React, { useState } from 'react'
import s from './RegistrationForm.module.css'
import { useNavigate } from 'react-router-dom'
import { Button, FormControl, TextField } from '@mui/material'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from 'moment'
import validator from 'validator'

function filterEmptyFields(data: any) {
  return Object.fromEntries(Object.entries(data).filter(([key, value]) => (value as string).trim() !== ''))
}

export const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [error, setError] = useState<any>({
    errorState: '',
    errorName: '',
    errorAddress: '',
    errorPhone: '',
    errorWebsite: '',
    errorDescription: '',
  })
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/thank-you-page')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError({
      errorState: '',
      errorName: '',
      errorAddress: '',
      errorPhone: '',
      errorWebsite: '',
      errorDescription: '',
    })

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get('name') as string,
      address: formData.get('address') as string,
      phone: formData.get('phone') as string,
      description: formData.get('description') as string,
      opening_hours: `${formData.get('startTime')} - ${formData.get('endTime')}`,
      website: formData.get('website') as string,
    }

    if (data.name.length < 2) {
      setIsSubmitting(false)
      return setError({
        errorName: 'Назва повинна бути не менше 2 символів',
      })
    }

    if (data.address.length < 2) {
      setIsSubmitting(false)
      return setError({
        errorAddress: 'Адреса повинна бути не менше 2 символів',
      })
    }

    if (!validator.isMobilePhone(data.phone, 'uk-UA')) {
      setIsSubmitting(false)
      return setError({
        errorPhone: 'Введіть номер в правильному форматі: +380670000000 або 0670000000',
      })
    }

    if (data.description.length < 2) {
      setIsSubmitting(false)
      return setError({
        errorDescription: 'Опис повинен бути не менше 2 символів',
      })
    }

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + '/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterEmptyFields(data)),
      })

      const responseData = await response.json()

      if (responseData.hasOwnProperty('details')) {
        setIsSubmitting(false)
        return setError({
          errorState: responseData.details[0].message,
        })
      }

      handleClick()
    } catch (error) {
      setError({
        errorState: (error as any).message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={s.registrationForm}>
      {error.errorState && <p className={s.error}>{error.errorState}</p>}
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <TextField
            error={!!error.errorName}
            id="outlined-error-helper-name"
            name="name"
            label="Назва"
            helperText={error.errorName}
            margin={'none'}
            required={true}
          />
          <TextField
            sx={{ marginTop: '20px' }}
            error={!!error.errorAddress}
            id="outlined-error-helper-address"
            name="address"
            label="Адреса"
            helperText={error.errorAddress}
            margin={'none'}
            required={true}
          />
          <TextField
            sx={{ marginTop: '20px' }}
            error={!!error.errorPhone}
            id="outlined-error-helper-phone"
            name="phone"
            label="Телефон"
            type={'tel'}
            helperText={error.errorPhone}
            margin={'none'}
            required={true}
            placeholder={'+380670000000'}
          />
          <TextField
            sx={{ marginTop: '20px' }}
            error={!!error.errorDescription}
            id="outlined-error-helper-description"
            name="description"
            label="Опис"
            helperText={error.errorDescription}
            margin={'none'}
            required={true}
            multiline
          />
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileTimePicker
              sx={{ marginTop: '20px' }}
              name={'startTime'}
              label={'Початок роботи'}
              ampm={false}
              defaultValue={moment('2022-04-17T09:00')}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <MobileTimePicker
              sx={{ marginTop: '20px' }}
              name={'endTime'}
              label={'Кінець роботи'}
              ampm={false}
              defaultValue={moment('2022-04-17T18:00')}
            />
          </LocalizationProvider>
          <TextField
            sx={{ marginTop: '20px' }}
            type="url"
            id="outlined-error-helper-url"
            name="website"
            label="Вебсайт"
            margin={'none'}
          />
          <Button sx={{ marginTop: '20px' }} variant="contained" size={'medium'} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Відправка...' : 'Зареєструватись'}
          </Button>
        </FormControl>
      </form>
    </div>
  )
}
