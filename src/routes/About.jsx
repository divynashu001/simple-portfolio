import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero2 from "../components/Hero2"
import AboutContent from "../components/AboutConetnt"
export default function About(){
    return(
        <div>
            <Navbar/>
            <Hero2 heading="ABOUT." text="Im a friendly Front-End Developer."/>
            <AboutContent/>
            <Footer/>
        </div>
    )
}