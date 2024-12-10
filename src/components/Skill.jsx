import HTML from "../assets/html.png";
import CSS from "../assets/css.jpg";
import JS from "../assets/js.png";
import REACT from "../assets/react.png";
import "./skill.css"

export default function Skill() {
    return (
        <div className="skills">
            <h1 className="skill-heading">My Skills</h1>
            <div className="skill-card">
                <div className="skill-item">
                    <img src={HTML} alt="HTML" />
                    <p>HTML</p>
                </div>

                <div className="skill-item">
                    <img src={CSS} alt="CSS" />
                    <p>CSS</p>
                </div>

                <div className="skill-item">
                    <img src={JS} alt="JavaScript" />
                    <p>JavaScript</p>
                </div>

                <div className="skill-item">
                    <img src={REACT} alt="React" />
                    <p>React</p>
                </div>
            </div>
        </div>
    );
}
