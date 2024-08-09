import styles from './thankYouPage.module.css'
import Fireworks from '@fireworks-js/react'

const ThankYouPage = () => {
  return (
    <div className={styles.container}>
      {
        <>
          <Fireworks
            options={{
              rocketsPoint: {
                min: 0,
                max: 100,
              },
            }}
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              position: 'fixed',
              background: '#000',
            }}
          />
          <div className={styles.thankYou}>
            <h1 className={styles.heading}>Дякуємо за підписку!</h1>
            <p className={styles.message}>
              Ми раді, що ви вирішили приєднатися до нашої спільноти.
              <br />
              <br />
              <a href="https://style-solution.vercel.app/">
                <b>Перейти на домашню сторінку</b>
              </a>
              <br />
              <br />
              Команда Style Solution
            </p>
          </div>
        </>
      }
    </div>
  )
}

export default ThankYouPage
