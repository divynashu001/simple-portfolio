import "./Hero.css"
import IntroImg from "../assets/heroPic.jpg"
import { Link } from "react-router-dom"


export default function Hero(){
    return(
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="Intro-Img" />
            </div>
            <div className="content">
                <p>HI, I'm Divyanshu Dhiman.</p>
                <h1>Frontend Developer.</h1>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    )
}