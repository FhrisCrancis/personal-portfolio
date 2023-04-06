import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png"

import { skillsData } from '../data/skillsData'
import { skillsImage } from '../utils/skillsImage'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>In my previous roles I mainly used Java, Spring Boot, and MySQL <br></br>but check out some other techlonologies I have experience with</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider" draggable={true} autoPlay={true} autoPlaySpeed={1500} pauseOnHover>
                                {skillsData.map((skill, id) => (
                                    <div className="item" key={id}>
                                        <img src={skillsImage(skill)} alt={skill} />
                                        <h5>
                                            {skill}
                                        </h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}