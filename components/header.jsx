import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';


export default function Header(){
    return(
        <Navbar className="leftAlign" collapseOnSelect expand="md" bg="light" variant="light">
            <Container> 
            <Link href="/" passHref><Navbar.Brand>
                <img
                alt="Houghton Web Design Logo"
                src="/images/inline-logo.png"
                className="d-inline-block align-top logo-img"
             />
      </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Link href="/" passHref eventKey="1"><Nav.Link>Home</Nav.Link></Link>
                <Link href="/seo" passHref eventKey="2"><Nav.Link>SEO & UI</Nav.Link></Link>
                <Link href="/bespoke-service" passHref eventKey="3"><Nav.Link>Bespoke Service</Nav.Link></Link>
                <Link href="/web-design" passHref eventKey="4"><Nav.Link>Web Design</Nav.Link></Link>
                <Link href="/portfolio" passHref eventKey="5"><Nav.Link>Portfolio</Nav.Link></Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}