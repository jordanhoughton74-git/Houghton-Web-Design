import Head from 'next/head';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import WaveBottom from '../components/wave-bottom';
import WaveTop from '../components/wave-top';


import styles from '../styles/Portfolio.module.css'

export default function Portfolio(){
    return (
 <>
 <Head>
  <title>Portfolio | Houghton Web Design, Kent, UK</title>
      <meta name="title" content="Freelance Web Designer |  Houghton Website Development Kent, UK"/>
      <meta name="description"
      content="My Portfolio. View my work and the story behind the examples.  Houghton Web Design." />
      <meta name="keywords" content="Web designer, mobile responsive websites, mobile responsive, freelance web designer, web developer, web maintenance, web consultant, seo, freelance web developer, web designer uk, web designer kent, web designer local"/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="Freelance Web Designer | Web developer Kent, UK"/>
      <meta property="og:site_name" content="Houghton Web Design"/>
      <meta property="og:url" content="www.houghtonwebdesign.co.uk"/>
      <meta property="og:description" content="I'm Jordan a freelance web designer based in Kent, UK. I deliver bespoke web design and developer services"/>
      <meta property="og:type" content="website"></meta>
  </Head>
<div className="gradient-section">
    <div className="wrapper">
        <div className={styles.title}>
        <h1>Portfolio</h1>
        <h5>Houghton Web Design</h5>
        </div>
    </div>
    <WaveBottom />
</div>
<div>
<div className="wrapper">
    <div className={styles.portfolio}>
    <h3>Mandate Monday - A Podcast Website</h3>
     <p className="grey-text">A podcast website with an eye catching mix of dark themes and bright colours to draw users
     to the important information.  Mandate Monday is a lightning fast website built on Next.js with easy-to-use add new 
     episode functionality, which automatically fills the home page with and episode page.
     </p>
     </div>

     <Container fluid>
         <Row>
         <Col lg={4} md={12} className="my-auto">
                 <Image src="/images/Gallery/Gallery10.png" alt="Mandate Monday Home Page" title="Mandate Monday Home Page" width="480px" height="199px"  />
             </Col>
             <Col lg={4} md={12} className="my-auto">
                <Image src="/images/Gallery/Gallery11.png" alt="Mandate Monday About Page" title="Mandate Monday About Page" width="480px" height="190px"  />
             </Col>
             <Col lg={4} md={12} className="my-auto">
                <Image src="/images/Gallery/Gallery12.png" alt="Mandate Monday Episodes Page" title="Mandate Monday Episodes Page" width="480px" height="201px"  />
             </Col>
         </Row>
     </Container>
     </div>

</div>
<div className="gradient-section">
<div className="wrapper">
    <div className={styles.portfolio}>
    <h3>Will's Success Way - An Online Booking Website</h3>
     <p className="grey-text">Will's Success Way is a website designed to be capable of advertising English tutorage
     and ultimately booking clients for lessons.  The colour scheme of blue is designed to match the logo and also 
     create an inviting atmosphere.  Information spaced out in a manner that students with less English knowledge
     can easily navigate.
     </p>
     </div>

     <Container fluid className={styles.portfolioGradient}>
         <Row>
         <Col lg={4} md={12} className="my-auto">
                 <Image src="/images/Gallery/Gallery13.png" alt="Mandate Monday Home Page" title="Mandate Monday Home Page" width="480px" height="296px"  />
             </Col>
             <Col lg={4} md={12} className="my-auto">
                <Image src="/images/Gallery/Gallery14.png" alt="Mandate Monday About Page" title="Mandate Monday About Page" width="480px" height="226px"  />
             </Col>
             <Col lg={4} md={12} className="my-auto">
                <Image src="/images/Gallery/Gallery15.png" alt="Mandate Monday Episodes Page" title="Mandate Monday Episodes Page" width="480px" height="244px"  />
             </Col>
         </Row>
     </Container>
     </div>
<WaveTop />
<WaveBottom />
</div>
<div>
<div className="wrapper">
    <div className={styles.portfolio}>
    <h3>E-Commerce - An Online Flower Store</h3>
     <p className="grey-text">A vibrant flower online flower store created on Wordpress, so the client can take advantage of the 
       simple to use built-in CMS.  I made sure to use the best and most colourful images to attract the eye
       and seal the deal.  Fully customised landing, product and catalogue pages were created to fit in with the central theme.
     </p>
     </div>

     <Container fluid>
         <Row>
         <Col lg={4} md={12} className="my-auto">
                 <Image src="/images/Gallery/Gallery1.png" alt="Flower shop single item" title="Flower shop single item" width="480px" height="264px"  />
             </Col>
             <Col lg={4} md={12} className="my-auto">
                <Image src="/images/Gallery/Gallery8.png" alt="Flower shop home page" title="Flower shop home page" width="480px" height="208px"  />
             </Col>
             <Col lg={4} md={12} className="my-auto">
                <Image src="/images/Gallery/Gallery9.png" alt="Flower shop new items" title="Flower shop new items" width="480px" height="236px"  />
             </Col>
         </Row>
     </Container>
     </div>

</div>
<div className="gradient-section">
<div className="wrapper">
    <div className={styles.portfolio}>
    <h3>Wedding Venue - A Brochure Site</h3>
    <p>A fast single page application designed to advertise a wedding venue and the various servcies/prdoucts which are offered.
      It features downloadable menus to entice bookings.  Styleish fonts and incredible vibrant photos to catch the viewers eye.
    </p>
    </div>
     <Container fluid className={styles.portfolioGradient}>
         <Row>
         <Col lg={4} md={12} className="my-auto">
                 <Image src="/images/Gallery/Gallery2.png" alt="wedding venue" title="wedding venue" width="480px" height="186px"  />
             </Col>
             <Col lg={4} md={12} className="my-auto">
                <Image src="/images/Gallery/Gallery3.png" alt="wedding menu" title="wedding menu" width="350px" height="334px"  />
             </Col>
             <Col lg={4} md={12} className="my-auto">
                <Image src="/images/Gallery/Gallery4.png" alt="wedding gallery" title="wedding gallery" width="480px" height="214px"  />
             </Col>
         </Row>
     </Container>
     </div>
     <WaveBottom />
    <WaveTop />
</div>
  
<div className="wrapper">
    <div className={styles.portfolio}>
    <h3>Spa and Wellbing - Online advertisement</h3>
    <p>A website designed to increase sales and advertise the beautiful Spa and Wellbeing offerings.  The website has a 
      multitude of functions, including gallery carousels and informational cards.
    </p>
    </div>

     <Container fluid>
         <Row>
         <Col lg={6} md={12} className="my-auto">
                 <Image src="/images/Gallery/Gallery6.png" alt="Spa about page" title="Spa about page" width="600px" height="292px"  />
             </Col>
             <Col lg={6} md={12} className="my-auto">
                <Image src="/images/Gallery/Gallery7.png" alt="Spa informatiom cards" title="Spa informatiom cards" width="600px" height="299px"  />
             </Col>
   
         </Row>
     </Container>

</div>




</>
    )
}