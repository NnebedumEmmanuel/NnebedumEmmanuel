import { Col } from "react-bootstrap";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { FaSymbol } from "@fortawesome/fontawesome-svg-core";
import website from "../assets/img/site.svg";
import { faGrinHearts } from "@fortawesome/free-regular-svg-icons";
export const ProjectCard = ({ title, description, imgUrl, gitHubLink, siteLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project " />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="linkContainer">
          <a href={gitHubLink} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i>git</a>
          <a href={siteLink} target="_blank" rel="noreferrer">
          
          <i class="fa-solid fa-square-up-right"></i>
          web
          </a>
          </div>
        </div>
      </div>
    </Col>
  )
}
