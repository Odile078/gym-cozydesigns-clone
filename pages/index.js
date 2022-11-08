import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import GetCozy from '../components/sections/GetCozy'
import Hero from '../components/sections/Hero'
// import '../styles/globals.css'
export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <GetCozy/>
    </main>
    <Footer/>
    </>
  )
}
