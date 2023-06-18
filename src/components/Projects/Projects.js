import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import news from "../../Assets/Projects/news.PNG";
import sv from "../../Assets/Projects/sv.PNG";
import blogg from "../../Assets/Projects/blogg.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="DailyScoop News Websites"
              description="Dailyscoop is a news website created using HTML, CSS, and JavaScript, which aggregates the latest news stories from around the world using the News API. The website has been designed to provide an easy-to-use and visually appealing interface for users to access news stories quickly and efficiently."
              ghLink="https://github.com/vipulDudani/Daily-Scoop-News-Website"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogg}
              isBlog={false}
              title="Blog Website"
              description="Welcome to my personal blog website, a digital space where I share my thoughts, experiences, and passions with the world. Using a combination of HTML, CSS, JS, EJS, Express.js, and MongoDB, I have created a visually appealing and user-friendly platform that reflects my unique personality and style."
              ghLink="https://github.com/vipulDudani/Blog-Website"
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sv}
              isBlog={false}
              title="Sorting Visualizer"
              description="The Sorting Visualizer project is an interactive web application that visually demonstrates the process of sorting algorithms. Users can select from various sorting algorithms, such as Bubble Sort, Selection Sort, or Quick Sort, and observe how the algorithms rearrange elements in real-time."
              ghLink="https://github.com/VipulDudani123/Sorting-visualizer"
              demoLink="https://633564a62e232c77d79e89ea--chimerical-creponne-1d730f.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
