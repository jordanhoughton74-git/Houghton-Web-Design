import Button from 'react-bootstrap/Button'
import Link from 'next/link';

export default function Four04 (){
    return (
    <div className="gradient-section fourzerofour">
        <div className="wrapper my-auto">
            <div className="fourzerofourcard">
                <h1 className="four-title">404</h1>
                <h2 className="grey-text">Opps! this page could not be found.</h2>
                <p className="grey-text">It looks like the page doesn't exist or may have been removed.</p>
                <Link href="/"><Button className="home-button">Home</Button></Link>{' '}
                <Button href="mailto:info@houghtonwebdesign.co.uk" className="contactme-button">Contact Us</Button>
            </div>
        </div>
    </div>
    )
}