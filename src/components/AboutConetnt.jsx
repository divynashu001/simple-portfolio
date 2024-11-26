import "./AboutContent.css"
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.jpg"
import { Link } from "react-router-dom"

export default function AboutContent(){
    return(
        <div className="about">
            <div className="left">
                <h1 className="about-heading">Who Am I?</h1>
                <p>I am a React front-end developer passionate about creating responsive and secure websites.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React2} alt="true" className="about-img" />
                    </div>
                    <div className="img-stack bottom">
                    <img src={React1} alt="true" className="about-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}