import { Route, Routes } from 'react-router-dom'
import Container from './components/Container/Container'
import Home from './views/Home/Home'
import Layout from './views/Layout'
import PrivacyPolicy from './views/PrivacyPolicy/PrivacyPolicy'

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
