import { Row, Container, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectsCard";
import projImg1 from "../assets/imgs/continenteprint.png";
import projImg2 from "../assets/imgs/caunyprint.png";
import projImg3 from "../assets/imgs/tek4lifeprint.png";
import projImg4 from "../assets/imgs/xtremeprint.png";
import projImg5 from "../assets/imgs/mrblueprint.png";
import projImg6 from "../assets/imgs/vatprint.png";
import projImg7 from "../assets/imgs/piranhaprint.png";
import projImg8 from "../assets/imgs/naeprint.png";
import projImg9 from "../assets/imgs/mada.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Continente",
      description: "Portuguese supermarket",
      imgUrl: projImg1,
    },
    {
      title: "Cauny",
      description: "Watch brand",
      imgUrl: projImg2,
    },
    {
      title: "Tek4life",
      description: "Electronics retailer",
      imgUrl: projImg3,
    },
    {
      title: "Piranha Supplies",
      description: "Retail supplier",
      imgUrl: projImg7,
    },
    {
      title: "VAT.com",
      description: "Online retailer",
      imgUrl: projImg6,
    },
    {
      title: "NAE Vegan Shoes",
      description: "Vegan footwear",
      imgUrl: projImg8,
    },
    {
      title: "MADA Baby Store",
      description: "Baby retailer",
      imgUrl: projImg9,
    },
    {
      title: "XTREME",
      description: "Sports retailer",
      imgUrl: projImg4,
    },
    {
      title: "Mr Blue",
      description: "Fashion retailer",
      imgUrl: projImg5,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                </div>
              )}
            </TrackVisibility>

            <p>Some projects that I have worked from scratch or supported.</p>

            <Row className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
