import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Layout = () => {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
