import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import styles from '../styles/Bespoke.module.css';

export default function BespokeService () {
    return(
<>
<div>
    <section className="stacking-slide color1">
    <span className={styles.timeline}>            
        <span className={styles.dot1}>1</span>
    </span>
        <h2 className={styles.title}>Bespoke Service</h2>
        <h3 className="grey-text bespoke-title">How The Bespoke Service Works</h3>
    <Container fluid className={styles.padding}>
        <Row className={styles.fullHeight}>
        <Col md={12} lg={6} className="margin-auto margin-top">
            <h3 className={styles.subTitle}>Stage 1 - Consultation</h3>
                <p className="grey-text justify">At Houghton Web Design I believe that your input is paramount to the success of your website.
                    Initial consultation will be carried out and a design will be planned.  We can dicuss fonts, colors and animations
                     to find the correct branding for you.
                </p>
            </Col>
            <Col md={12} lg={6} className="margin-auto margin-bottom">
            <img src="images/Bespoke/Consultation.png" className={styles.browserImgTop} alt="Intial consultation choosing colors"/>

            </Col>
        </Row>
    </Container>
    </section>
    <section className="stacking-slide color2">
    <span className={styles.timelineDiv}>            
        <span className={styles.dot5}>2</span>
    </span>

    <Container fluid className={styles.padding}>
        <Row className={styles.fullHeight2}>
        <Col md={12} lg={6} className="margin-auto margin-top">
            <h3 className={styles.subTitle}>Stage 2 - Draft</h3>
                <p className="grey-text justify">From the initial consultation I will create a mockup of the website, this is then sent back to you for sign off.
                    Any revisions that you identify will be carried out before the next stage is started.
                </p>
            </Col>
            <Col md={12} lg={6} className="margin-auto margin-bottom">
            <img src="images/Bespoke/mockup.png" className={styles.browserImg} alt="Website being coded"/>

            </Col>
        </Row>
    </Container>
    </section>
    <section className="stacking-slide color3">
    <span className={styles.timelineDiv}>            
        <span className={styles.dot5}>3</span>
    </span>

    <Container fluid className={styles.padding}>
        <Row className={styles.fullHeight2}>
        <Col md={12} lg={6} className="margin-auto margin-top">
            <h3 className={styles.subTitle}>Stage 3 - Creation</h3>
                <p className="grey-text justify">The website will then be coded, all functions required will be created and tested.  I'll work closely with 
                    the mock up and our initial consultation to include all the features that you need to engage clients.
                </p>
            </Col>
            <Col md={12} lg={6} className="margin-auto margin-bottom">
            <img src="images/Bespoke/Coding.png" className={styles.browserImg} alt="Website being coded"/>

            </Col>
        </Row>
    </Container>
    </section>
    <section className="stacking-slide color4">
    <span className={styles.timelineDiv}>            
        <span className={styles.dot5}>4</span>
    </span>

    <Container fluid className={styles.padding}>
        <Row className={styles.fullHeight2}>
        <Col md={12} lg={6} className="margin-auto margin-top">
            <h3 className={styles.subTitle}>Stage 4 - Final Draft</h3>
            <p className="grey-text justify">The fully coded and functional website is sent to you for approval and sign off, any revisions to design or
                 functionality will then be carried out, ready for the website to go live.  At this stage you can test all
                  features and responsiveness to ensure it meets your spec.
            </p>
            </Col>
            <Col md={12} lg={6} className="margin-auto margin-bottom">
            <img src="images/Bespoke/QA-Testing.png" className={styles.browserImg} alt="QA test and final draft to be sent"/>

            </Col>
        </Row>
    </Container>
    </section>
    <section className="stacking-slide color4">
    <span className={styles.timelineBot}>           
        <span className={styles.dot5}>5</span>
    </span>

    <Container fluid className={styles.padding}>
        <Row className={styles.fullHeight2}>
            <Col md={12} lg={6} className="margin-auto margin-top">
            <h3 className={styles.subTitle}>Stage 5 - Live</h3>
            <p className="grey-text justify">Once I have sign off from you, the website will be QA tested to make sure the website functions correctly,
                everytime.  The next step is putting the website live, this is carried out by your chosen method, which we can discuss
                what the best solution is for you.  
            </p>
            </Col>
            <Col md={12} lg={6} className="margin-auto margin-bottom">
            <img src="images/Bespoke/Final.png" className={styles.browserImg} alt="Final draft of the website"/>

            </Col>
        </Row>
    </Container>
    </section>




</div>
</>
    )
}