import Head from 'next/head';
import Link from 'next/link';
import ContactExpandable from '../components/ContactExpandable';
import HomeCarousel from '../components/HomeCarousel';
import WaveBottom from '../components/wave-bottom';
import WaveTop from '../components/wave-top';
import styles from '../styles/Home.module.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faChartLine, faPoundSign, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <>
    <Head>
      <title>Freelance Web Designer | Houghton Web Design, Kent, UK</title>
      <meta name="title" content="Freelance Web Designer |  Houghton Website Development Sittingbourne, Kent, UK"/>
      <meta name="description" content="I'm Jordan, a freelance web designer based in Sittingbourne, Kent, United Kingdom.  Delivering Bespoke websites and maintenance services. Houghton Web Design."/>
      <meta name="keywords" content="Web designer, freelance web designer, mobile responsive websites, mobile responsive, web developer, web maintenance, web consultant, seo, freelance web developer, web designer uk, web designer kent, web designer local"/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="Freelance Web Designer | Web developer Kent, UK"/>
      <meta property="og:site_name" content="Houghton Web Design"/>
      <meta property="og:url" content="www.houghtonwebdesign.co.uk"/>
      <meta property="og:description" content="I'm Jordan Houghton a freelance web designer based in Kent, UK. I deliver bespoke web design and developer services"/>
      <meta property="og:type" content="website"></meta>
    </Head>
    <div className="home-top" alt="Houghton Web Design Hero">
      <div className="wrapper my-auto">
        <Container fluid>
          <Row className="my-auto">
            <Col md={4} sm={12} className="home-title">
            <h1>Houghton Web Design</h1>
              <h3 className={styles.homeTitle}>Your web journey starts today</h3>   
                <Link href="/bespoke-service"><a className="btn btn-one btn-color-two">
                  <span>Find out more</span>
                </a></Link>
        </Col>
        <Col md={8} sm={12} className="svg-image my auto">
        <img className="mobile-svg" alt="mobile phone" src="/images/mobile-phone.svg" />

        </Col>
        </Row>
        </Container>
      </div>
      <WaveBottom />
    </div>

    <div className={styles.padding}>
      <div className="wrapper">
      <Container fluid>
        <Row>
          <Col md={6} sm={12} className={styles.leftAlign}>
          <h2>Freelance Web Designer</h2>
            <p className="grey-text">Welcome to Houghton Web Design.  My name is Jordan Houghton and I am a Web Developer & Designer based in Sittingbourne, Kent with a passion for user experience. 
            Please feel free to contact me about starting our project together. You will be amazed by what we can achieve.
            The process to creating your dream website begins by filling out the form or sending me an email.</p>
          <h4>How Can I Help You?</h4>
            <p className="grey-text"><strong>Design, Development & Maintenance.</strong>  I can create your website from scratch and will take care of all maintenance
            for as long as you wish.  This includes an SSL certificate, which will allow visitors to see your site as 
            being secure.  This is paramount in building any online relationship.</p>
          <h4>Pricing Sructure.</h4>
            <p className="grey-text">Contact me for a <strong>free quote</strong>. As the sole employee and owner of the business, I have incredibly low overheads.  This allows me to offer you the best price possible for your site.</p>
          <h4>Your Choice of Code.</h4>
            <p className="grey-text">I work with React.JS, Next.JS and WordPress to create the best websites
              imaginable.  Using multiple styles of code allows me to customise the website entirely to your needs, whether you need lightning-fast responsiveness or an easy-to-use CMS (Content Management System), <strong>I will have you covered.</strong></p>
          </Col>
          <Col className={styles.carousel} md={6} sm={12}>
            
            <HomeCarousel />
          </Col>
        </Row>
      </Container>
      </div>
    </div>
    
    <div className="gradient-section">
      <div className="wrapper">
        <Container fluid className={styles.cardSection}>
        <CardGroup className={styles.paddingBottom}>
            <Card border="light" className={styles.card}>
              <Card.Title><span className={styles.dot}><FontAwesomeIcon color="blue" size="lg" icon={faComments} /></span><h4>Bespoke Service</h4></Card.Title>
              <Card.Body>
                <Card.Text className="grey-text">
                  From inception to completion, I'll be your <strong>sole point of contact.</strong> This allows me to create a Bespoke Service tailored around you and most importantly your website.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="light" className={styles.card}>
              <Card.Title><span className={styles.dot2}><FontAwesomeIcon color="blue" size="lg" icon={faChartLine} /></span><h4>SEO</h4></Card.Title>
              <Card.Body>
                <Card.Text className="grey-text">
                    Fast & Responsive.  <strong>ALL</strong> websites created are built with Search Engine Optimisation in mind and are built to be mobile responsive, ensuring your business does not miss out on the 52% of people that surf the internet using their phones.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="light" className={styles.card}>
              <Card.Title><span className={styles.dot3}><FontAwesomeIcon color="blue" size="lg" icon={faPoundSign} /></span><h4>Pricing</h4></Card.Title>
              <Card.Body>
                <Card.Text className="grey-text">
                Being a sole business owner, I have lower overheads than traditional agencies
                and I make sure I pass this saving to you. <strong>NO MORE MIDDLEMEN!</strong>
                </Card.Text>
              </Card.Body>
            </Card>
        </CardGroup>
        <Link href="/web-design">
        <a className="cta">
          <span>View The Web Design Process</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a></Link>
      </Container>
      </div>
      <WaveBottom />
      <WaveTop />
    </div>
    <div className="contact-div">
      <div className="wrapper">
      <Container fluid>
        <Row className="rowReverse">
          <Col md={6} sm={12} className="left my-auto">
            <h5>How Can I Help?</h5>
            <p className="grey-text">Fill out the form for a free quote or just a chat about your new project and I'll get back as soon as possible.</p>
            <hr className={styles.line} />
            <h5>Contact Information</h5>
            <span className="grey-text"><FontAwesomeIcon className={styles.contactIcon} icon={faEnvelope} size="lg" /> info@houghtonwebdesign.co.uk</span><br/>
            <span className="grey-text bot-pad"><FontAwesomeIcon className={styles.contactIcon} icon={faPhone} size="lg" /> 07999443163</span>
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
