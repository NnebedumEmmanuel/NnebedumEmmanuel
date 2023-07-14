import { Container, Row, Col, Tab,  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/tour-app.png";
import projImg2 from "../assets/img/commercial-webapp.png";
import projImg3 from "../assets/img/weather.jpg";
import projImg4 from "../assets/img/estate-landing-page.jpg";
import projImg5 from "../assets/img/color generator.png";
import projImg6 from "../assets/img/to-do app-main.jpg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tour webapp",
      description: "A webapp that helps you find the best tour",
      imgUrl: projImg1,
      gitHubLink: "https://github.com/NnebedumEmmanuel/tourisim-web-app.git",
      siteLink: "https://tourisim-web-app-e26z.vercel.app/?vercelToolbarCode=FipMARXRX_TmOFl"
    },
    {
      title: "Commercial Website",
      description: "A web app that provides interface for E-commerce",
      imgUrl: projImg2,
      gitHubLink: "https://github.com/NnebedumEmmanuel/commercial-website.git"
      ,siteLink: "https://commercial-website-kbyc.vercel.app/?vercelToolbarCode=6r1PP1vod1vnUPC"
    },
    {
      title: "Weather-app",
      description: "A frontend interface for a weather app",
      imgUrl: projImg3,
      gitHubLink: "https://github.com/NnebedumEmmanuel/weather-website.git"
      ,siteLink: "https://weather-website-s6ux.vercel.app/?vercelToolbarCode=xzB5w1n_oeO0XqS"
    },
    {
      title: "Estate landing page",
      description: "A landing page for an Estate",
      imgUrl: projImg4,
      gitHubLink: "https://github.com/NnebedumEmmanuel/landing-page-for-an-Esate.git"
      ,siteLink: "https://fbs-2-y82y-git-main-nnebedumemmanuel.vercel.app/?vercelToolbarCode=8t-W-Q0FUuLqXQW"
    },
    {
      title: "Color Generator",
      description: "An App that generates color",
      imgUrl: projImg5,
      gitHubLink: "https://github.com/NnebedumEmmanuel/portfolio"
      ,siteLink: "https://color-generator-sigma-five.vercel.app/?vercelToolbarCode=xfNj1QxT3MsUvyf"
    },
    {
      title: "To-do list",
      description: "An helps that helps u keep tab of your schedule",
      imgUrl: projImg6,
      gitHubLink: "https://github.com/NnebedumEmmanuel/color-generator.git"
      ,siteLink: "https://color-generator-sigma-five.vercel.app/?vercelToolbarCode=o9G_TriB0PkG_uh"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of my works, feel ree to check it out.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
