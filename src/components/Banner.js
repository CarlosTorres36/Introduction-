import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";
import rocketImage from "../assets/imgs/rocket-image.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Frontend Developer",
    "UI/UX Designer",
    "Software Developer",
    "Amateur Photographer",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <span className="tagline">Welcome to my Portfolio Introduction</span>
      <Container className="banner-container">
        <Row className="align-items-center">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`Hi! I'm Carlos Torres `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>Right now I am working as a frontend developer</p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Col xs={12} md={6} xl={5}>
          <img src={rocketImage} alt="Header Img" />
        </Col>
      </Container>
      <button onClick={() => (window.location.hash = "contact")}>
        Let's Connect <ArrowRightCircle size={25} />
      </button>
    </section>
  );
};
