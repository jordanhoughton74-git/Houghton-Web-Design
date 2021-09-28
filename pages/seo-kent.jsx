import Head from "next/head";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import styles from '../styles/Seo.module.css';
import WaveBottom from '../components/wave-bottom';
import WaveTop from '../components/wave-top';


export default function Seo (){
    return(
        <>
    <Head>
        <title>Freelance SEO | SEO Kent | Houghton Web Design</title>
        <meta name="title" content="Freelance SEO | SEO Kent | Need a flawless UI and UX?"/>
        <meta name="description" content="I'm Jordan a freelance web designer, delivering SEO and UI led interfaces, which are always mobile responsive and affordable web design. Houghton Web Design." />
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="en"/> 
        <meta property="og:title" content="Freelance Web Designer | Web developer Kent, UK"/>
        <meta property="og:site_name" content="Houghton Web Design"/>
        <meta property="og:url" content="https://houghtonwebdesign.co.uk/seo-kent/"/>
        <meta property="og:description" content="I'm Jordan a freelance web designer based in Kent, UK. I deliver bespoke web design and developer services"/>
        <meta property="og:type" content="website"></meta>
      </Head>
    <div>
        <div className="wrapper">
        <Container fluid className={styles.paddingTop}>
            <Row className="rowReverse my-auto">
                <Col md={12} lg={6} className="my-auto">
                <h1 className="seoTop asH2">User Interface and User Experience</h1>
                    <p className="grey-text left-align">For a website to be successful, it must have both a sleek User Interface (UI) 
                    and a satisfying User Experience (UX). The UI and UX build foundations for <strong>return traffic and potential 
                    sales, as a Freelance Web Designer I understand just how important building relationships through UI can be.</strong> 
                    A clogged website might distract or confuse potential clients. My bespoke websites are designed with this
                    in mind, by using a streamlined modern design, and are built using code languages designed for the fastest 
                    loading times. I will work closely with you to choose a style that is both related to your business and will
                        be able to become a core component to its future success. If you can dream it, I can build it.</p>
                </Col>
                <Col md={12} lg={6} className="my-auto pic-left">
                    <Image className={styles.seoImg} src="/images/UI-img.jpg" alt="code example" title="code example" width="480px" height="323px" />
                </Col>
            </Row>  
            </Container>
        </div>
    </div>

    <div className="gradient-section">
        <div className="wrapper">
        <Container fluid className={styles.padding}>
            <Row className="my-auto middleRow">
                <Col md={12} lg={6} className="left-align my-auto">
                <h2>Why is SEO important?</h2>
                    <p className="grey-text">SEO stands for Search Engine Optimisation. It is a powerful tool for long 
                    running marketing, that will allow your customers to find your site through related web searches. 
                    This will increase your online exposure, and the <strong>quality and quantity</strong> of web traffic that you will
                    receive. Your website will be created with SEO in mind, following best practices to increase your 
                    traffic and the potential growth of your business.
                    As a freelance web designer, SEO is paramount to my own success and I can help any site from a startup to existing business. </p>
                </Col>
                <Col md={12} lg={6} className="my-auto">
                    <Image className={styles.seoImg} src="/images/seo-img.jpg" alt="laptop with seo graph" title="laptop with seo graph" width="480px" height="323px" />
                </Col>
            </Row>
            </Container>
        </div>
        <WaveBottom />
        <WaveTop />
    </div>
    <div>
        <div className="wrapper">
        <Container fluid className={styles.paddingBottom}>
            <Row className="rowReverse my-auto">
                <Col md={12} lg={6} className="left-align my-auto">
                <h2>Mobile Responsive</h2>
                    <p className="grey-text">It is now more important than ever to have a mobile responsive website. 
                    This means clients using a mobile device will have the same experience as someone using a desktop.
                    It is estimated that over <strong>52%</strong> of internet usage comes from Mobile Phones alone. ALL my websites are 
                    built with mobile responsiveness as a key component. Unlike many other web designers, I do not charge
                    extra for this feature, as to me this is a necessity, and no website is complete without it.  As you can see every element on my own 
                    Freelance Web Design site is mobile first, giving usability to the majority market.</p>
                   </Col>
                <Col md={12} lg={6} className="my-auto pic-left">
                    <Image className={styles.seoImg} src="/images/mobile-img.jpg" alt="mobile responsive display" title="mobile responsive display" width="480px" height="323px" />
                </Col>
            </Row>
        </Container>
        </div>
    </div>






        </>
    )
}