import "./Hero2.css"
export default function Hero2({heading, text}){
    return(
        <div className="hero-img2">
            <div className="heading">
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}