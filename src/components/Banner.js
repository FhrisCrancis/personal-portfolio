import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/astronaut.png"

export const Banner = () => {
    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const toRotate = [ "Full Stack Developer", "UI Designer", "Java Developer", "Team Lead", "Application Tester", "Software Engineer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 1500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Chris Francis `}<br></br><span className="wrap">{text}</span></h1>
                        <p>I'm a self driven Java full stack developer with experience in managing a team and supporting large scale applications looking for new development opportunities to continue growing.
                            I have experience with full-stack development, project management, and database management. I've worked with many technologies and frameworks including Java, SQL, Spring Boot, Git, and React just to name a few.
                            <br></br>In my free time when I'm not learning new tech I like to build mechanical keyboards, play video games with my friends, and spend time with my family.
                        </p>
                        <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}