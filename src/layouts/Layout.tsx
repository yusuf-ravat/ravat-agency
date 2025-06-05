import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>Ravat Tech Solution - Your Technology Partner</title>
        <meta name="description" content="Ravat Tech Solution offers expert technology services including web development, mobile app development, and IT consulting. Get innovative solutions for your business."
        />
        <meta name="keywords" content="Ravat Tech Solution, technology services, web development, mobile app development, IT consulting, software development, tech solutions"
        />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}