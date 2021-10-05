import Head from "next/head";
import Link from 'next/link';
import ContactExpandable from '../components/ContactExpandable';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import WaveBottom from '../components/wave-bottom';
import WaveTop from '../components/wave-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faCheck, faTags, faTasks, faCommentDots, faScroll, faCode, faClipboardCheck, faWindowMaximize, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles/WebDesign.module.css'

export default function WebDesign (){
    return (
<>
<Head>
  <title>Affordable Web Designer | Freelance Web Design</title>
      <meta name="title" content="Affordable Web Designer | Freelance Web Design" />
      <meta name="description" content="I'm Jordan a freelance web designer, delivering affordable web design.  Take a look at my bespoke web designs and get in contact to see just how affordable my web design is." />
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>  
      <meta property="og:title" content="Freelance Web Designer | Web developer Kent, UK"/>
      <meta property="og:site_name" content="Houghton Web Design"/>
      <meta property="og:url" content="https://houghtonwebdesign.co.uk/web-design/"/>
      <meta property="og:description" content="I'm Jordan a freelance web designer based in Kent, UK. I deliver bespoke web design and developer services"/>
      <meta property="og:type" content="website"></meta>
</Head>
    <div className="gradient-section">
        <div className="wrapper">
        <div className={styles.padding}>
            <h1 className={styles.titleGreyh1}>Freelance Web Design<span className={styles.remove}> and Development</span>.</h1>
            <h3 className={styles.titleGrey}>Why Choose Me?</h3>
    
    <Container fluid className={styles.spacing}>
        <Row className={styles.center}>
            <Col xl={3} lg={6} md={6} sm={12} xs={12} className={styles.cardPad}>
            <Card border="light" className={styles.cardHeight}>
            <Card.Title><span className={styles.dot}><FontAwesomeIcon icon={faComment} color="blue" size="lg" /></span><h4>Communication</h4></Card.Title>
            <Card.Body>
                <Card.Text className="grey-text">
                My client is my top prioty. As such all <strong>communication</strong>  goes through me, cutting out anyone else and any chance of miscommunication.
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>

            <Col xl={3} lg={6} md={6} sm={12} xs={12} className={styles.cardPad}>
            <Card border="light" className={styles.cardHeight}>
            <Card.Title><span className={styles.dot2}><FontAwesomeIcon icon={faCheck} color="blue" size="lg" /></span><h4>Full Control</h4></Card.Title>
            <Card.Body>
            <Card.Text className="grey-text">
            Want something changed or revised? Before any website goes live, you will have to sign off on all elements.  This will ensure that your site is entirely as you wished.
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>

        <Col xl={3} lg={6} md={6} sm={12} xs={12} className={styles.cardPad}>
        <Card border="light" className={styles.cardHeight}>
            <Card.Title><span className={styles.dot3}><FontAwesomeIcon icon={faTags} color="blue" size="lg" /></span><h4>Affordable Web Design</h4></Card.Title>
            <Card.Body>
            <Card.Text className="grey-text">
            <strong>Cut out fees </strong>every penny you spend on your Website is spent on developing the best possible solution.  Being a freelancer means affordable web design for you.
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>

        <Col xl={3} lg={6} md={6} sm={12} xs={12} className={styles.cardPad}>
        <Card border="light" className={styles.cardHeight}>
            <Card.Title><span className={styles.dot4}><FontAwesomeIcon icon={faTasks} color="blue" size="lg"/></span><h4>Progess Tracking</h4></Card.Title>
            <Card.Body>
                <Card.Text className="grey-text">
            I will keep you updated on progression of the website from start to finish, so you are <strong>never left second guessing.</strong>
            </Card.Text>
            </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
        </div>
        </div>
    <WaveBottom />
    </div>
    <div>
        <div className="wrapper">
        <Container fluid className={styles.paddingTopSides}>
        <h1 className={styles.titleGreyh1}>What Do I Work With?</h1>

        <Row className={styles.paddingMiddle}>
        <Col className={styles.cardWrap} md={12} lg={6}>
            <h5>React.JS</h5>
            <p className="grey-text justify">React is an open-source language based on JavaScript.  This is the language that my website is coded with. 
            React utilises something called Single Page Applications (SPA), which creates an extremely fast and streamlined website, by loading the entire site upon initial entry.  This cuts down on load times while navigating between different pages.  This makes your site appear to the user, your client, to be cutting edge. As we all know in business, as in life, first impressions are key. Additionally, as React is open-source its security is regularly updated, helping to ensure that your website remains secure and safe.</p>
            <img className={styles.removeImg} src="/images/React.png" alt="React Logo" width="100%" style={{ maxWidth: 180 }} />
        </Col>
        <Col className={styles.cardWrap} md={12} lg={6}>
            <h5>WordPress (CMS)</h5>
            <p className="grey-text justify">WordPress is a hugely popular open-source web designing CMS or Content Management Software.  This allows my clients to easily take over control of their content creation. WordPress started as a blogging service, however, with the addition of plug-ins, which can affect everything from security to functionality, it has become a hugely popular tool in every sector of business. WordPress estimates that a staggering 39% of the web has been built using their platform.</p>
            <img className={styles.removeImg} src="/images/WordPress.png" alt="WordPress Logo" width="100%" style={{ maxWidth: 150 }} />
        </Col>
        </Row>
        </Container>

        <Container fluid >
        <Row className={styles.paddingImg}>
        <Col md={12} lg={6}>
           <img className={styles.removeSmall} src="/images/React.png" alt="React Logo" width="100%" style={{ maxWidth: 180 }} />
        </Col>
        <Col md={12} lg={6}>
            <img className={styles.removeSmall} src="/images/WordPress.png" alt="WordPress Logo" width="100%" style={{ maxWidth: 150 }} />
        </Col>
        </Row>
        </Container>



        </div>
    </div>


    <div className="gradient-section-horizontal">
        <div className={styles.timelineTitle}>
        <h2>What's Next?</h2>
        <h5 className="grey-text">I use a simple 5 step plan to make sure your affordable web design is completed to the highest standard and to your satisfaction, in the shortest possible time.  </h5>
        </div>
    <WaveTop />
    </div>
<div className="gradient-section-horizontal">
    
    <VerticalTimeline
        animate={false}
    >
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#0100ca', color: '#fff' }}
    contentStyle={{ borderTop: '3px solid #0100ca' }}
    icon={<FontAwesomeIcon icon={faCommentDots} color="white" size="lg" />}
    iconClassName="speech-icon"

  >
    <h4 className="vertical-timeline-element-title">Initial Design & Function Talks</h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#651fff', color: '#fff' }}
    contentStyle={{ borderTop: '3px solid #651fff' }}
    icon={<FontAwesomeIcon icon={faScroll} color="white" size="lg" />}
    iconClassName="code-icon"

  >
    <h4 className="vertical-timeline-element-subtitle">First Draft Sent To You For Approval</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#ff5722', color: '#fff' }}
    contentStyle={{ borderTop: '3px solid #ff5722' }}
    icon={<FontAwesomeIcon icon={faCode} color="white" size="lg" />}
    iconClassName="code-icon"
  >
    <h4 className="vertical-timeline-element-subtitle">Site Is Coded & Created</h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#e91e63', color: '#fff' }}
    contentStyle={{ borderTop: '3px solid #e91e63' }}
    icon={<FontAwesomeIcon icon={faClipboardCheck} color="white" size="lg" />}
    iconClassName="clip-icon"

  >
    <h4 className="vertical-timeline-element-subtitle">Final Site Is Sent To You For Review</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: '#000063', color: '#fff' }}
    contentStyle={{ borderTop: '3px solid #000063' }}
    icon={<FontAwesomeIcon icon={faWindowMaximize} color="white" size="lg" />}
    iconClassName="speech-icon"
  >
    <h4 className="vertical-timeline-element-subtitle">Site Is QA Tested & Put Live</h4>
    
  </VerticalTimelineElement>
  
 
</VerticalTimeline>
</div>
<div className="gradient-section-horizontal">
    <div className={styles.timelineButton}>
        <h5>To find out more</h5>
        <Link href="/bespoke-web-designs"><a className="btn btn-one btn-color-two">
              <span>Click Here</span>
        </a></Link>
        </div>
    <WaveBottom />
</div>
<div className="contact-div" id="contact">
      <div className="wrapper">
      <Container fluid>
        <Row className="rowReverse">
          <Col md={6} sm={12} className="left my-auto">
            <h5>How Can I Help?</h5>
            <p className="grey-text">I'm a freelance web designer and it may just surprise you how affordable web design can really be.  Fill out the form for a free quote or just a chat about your new project and I'll get back as soon as possible.</p>
            <hr/>
            <h5>Contact Information</h5>
            <a href="mailto:info@houghtonwebdesign.co.uk"><span className="grey-text"><FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope} size="lg" /> info@houghtonwebdesign.co.uk</span><br/></a>
            <span className="grey-text bot-pad"><FontAwesomeIcon className={styles.contactIcon} icon={faPhone} size="lg" /> 07999443163</span>
            <a href="https://www.facebook.com/HoughtonWebDesign"><p className="grey-text bot-pad"><FontAwesomeIcon className={styles.contactIcon} icon={faFacebook} size="lg" /> @HoughtonWebDesign</p></a>
            </Col>  
          <Col md={6} sm={12}>
          <div className={styles.contactCard}>
            <ContactExpandable />
          </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>

</>
    )
}