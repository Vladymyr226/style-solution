import s from './PrivacyPolicy.module.css'

const PrivatPolicy = () => {
  return (
    <div className={s.privatPolicy}>
      <h1 className={s.title}>Privacy Policy</h1>
      <ul className={s.linksList}>
        <li className={s.link}>Terms Of Use</li>
        <li className={s.divider}>|</li>
        <li className={s.link}>Release Notes</li>
        <li className={s.divider}>|</li>
        <li className={s.link}>How It Works</li>
      </ul>
      <p className={s.description}>Professional summary - A brief description & summary about you & your experience.</p>
      <div className={s.wideDivider}></div>
      <h2 className={s.subTitle}>Privacy Policy</h2>
      <p className={s.example}>Example 3: Modular Grid</p>
      <p className={s.text}>
        The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may
        slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd
        say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse
        problem.
      </p>
      <p className={s.example}>Benefits of the Grid</p>
      <div className={s.text}>
        Using a grid benefits both end users and the designers alike:
        {
          <ul className={s.list}>
            <li>
              Design comps, layouts, wireframes—will your clients accept that you go about things the facile way?
              Authorities in our business will tell in no uncertain terms that Lorem Ipsum is
            </li>

            <li>Users can easily scan predictable grid-based interfaces.</li>
            <li>
              Design comps, layouts, wireframes—will your clients accept that you go about things the facile way?
              Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to
              forswear forever.
            </li>
          </ul>
        }
      </div>
    </div>
  )
}

export default PrivatPolicy
