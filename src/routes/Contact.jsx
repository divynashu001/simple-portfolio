import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Hero2 from "../components/Hero2"
import Form from "../components/Form"
export default function Contact(){
    return(
        <div>
            <Navbar/>
            <Hero2 heading="CONTACT." text="Lets have a chat."/>
            <Form/>
            <Footer/>
        </div>
    )
}