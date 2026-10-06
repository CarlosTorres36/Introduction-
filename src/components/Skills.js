import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import htmlLogo from "../assets/imgs/text.png";
import cssLogo from "../assets/imgs/css-3.png";
import javascriptLogo from "../assets/imgs/js.png";
import tailwdindLogo from "../assets/imgs/icons8-tailwind-css-48.png";
import reactLogo from "../assets/imgs/atom.png";
import nextjsLogo from "../assets/imgs/nextjs-logo.png";
import angularLogo from "../assets/imgs/angular.svg";
import bootstrapLogo from "../assets/imgs/bootstrap.png";
import nodejsLogo from "../assets/imgs/icons8-nodejs-48.png";
import laravelLogo from "../assets/imgs/Laravel.svg";
import figmaLogo from "../assets/imgs/Figma logo.svg";
import shopifyLogo from "../assets/imgs/shopify.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { title: "HTML", imgUrl: htmlLogo },
    { title: "CSS", imgUrl: cssLogo },
    { title: "Javascript", imgUrl: javascriptLogo },
    { title: "Tailwind", imgUrl: tailwdindLogo },
    { title: "React", imgUrl: reactLogo },
    { title: "NextJs", imgUrl: nextjsLogo },
    { title: "Angular", imgUrl: angularLogo },
    { title: "Bootstrap", imgUrl: bootstrapLogo },
    { title: "NodeJs", imgUrl: nodejsLogo },
    { title: "PHP Laravel", imgUrl: laravelLogo },
    { title: "Figma", imgUrl: figmaLogo },
    { title: "Shopify", imgUrl: shopifyLogo },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I’m a Frontend Developer with experience across different areas
                of development and technology, giving me a broad skill set and
                the ability to adapt to different projects and challenges.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    {skill.imgUrl && (
                      <img
                        className="logo-icon"
                        src={skill.imgUrl}
                        alt={skill.title}
                      />
                    )}
                    <h5>{skill.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
