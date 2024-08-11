import { Route, Routes } from 'react-router-dom'
import Container from './components/Container/Container'
import Home from './views/Home/Home'
import Layout from './views/Layout'
import ThankYouPage from './components/thankYouPage/ThankYouPage'
import AboutUs from './views/AboutUs/AboutUs'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you-page" element={<ThankYouPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
