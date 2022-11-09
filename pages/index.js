import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import GetCozy from '../components/sections/GetCozy'
import Hero from '../components/sections/Hero'
import Testimonials from '../components/sections/Testimonials'
import Clients from '../components/sections/Clients'
export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <GetCozy/>
      <Testimonials/>
      <Clients/>
    </main>
    <Footer/>
    </>
  )
}
