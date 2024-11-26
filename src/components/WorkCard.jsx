import "./WorkCard.css"
import ProjectCardData from "./WorkCardData"
import { NavLink } from "react-router-dom"
export default function WorkCard({imgsrc,title,text,view,source}){
    return (
        <div className="project-card">
                    <img src={imgsrc} alt="" />
                    <h2 className="project-title">{title}</h2>
                    <div className="pro-details">
                        <p>{text}</p>
                        <div className="pro-btns">
                            <NavLink to={view} target="_blank" className="btn">View</NavLink>
                            <NavLink to={source} target="_blank" className="btn">Source</NavLink>
                        </div>
                    </div>
                </div>
    )
}