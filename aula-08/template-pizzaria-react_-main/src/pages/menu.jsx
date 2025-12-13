import { Footer } from "../components/footer"
import { Header } from "../components/header"
import HighlightsSection from "../components/pageHome/highlights-section"
import { MenuSection } from "../components/pageMenu/menu-section"


export const Menu = () => {
    return (
        <>
            <Header/>
            <MenuSection/>
            <HighlightsSection/>
            <Footer/>
        </>
    )
}