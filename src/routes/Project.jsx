import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero2 from "../components/Hero2"
import Price from "../components/Price"
import Work from "../components/Work"
import Skill from "../components/Skill"
export default function Project(){
    return(
        <div>
            <Navbar/>
            <Hero2 heading="PROJECTS." text="These are my projects."/>
            <Work/>
            <Skill/>
            {/* <Price/> */}
            <Footer/>
        </div>
    )
}