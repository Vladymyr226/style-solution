import { Route, Routes } from 'react-router-dom'
import Container from './components/Container/Container'
import Home from './views/Home/Home'
import Layout from './views/Layout'
import PrivacyPolicy from './views/PrivacyPolicy/PrivacyPolicy'
import ThankYouPage from './components/thankYouPage/ThankYouPage'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/thank-you-page" element={<ThankYouPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
