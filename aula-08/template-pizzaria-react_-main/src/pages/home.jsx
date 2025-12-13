import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { HeroSection } from "../components/pageHome/hero-section"
import HighlightsSection from "../components/pageHome/highlights-section"

export const Home = () =>  {

  return (
    <>
      <Header/>
      <HeroSection/>
      <HighlightsSection/>
      <Footer/>
    </>
  )
}