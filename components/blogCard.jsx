import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../components/date';

export default function BlogCard(props) {
    return(
    <Col lg={4} md={6} sm={12}>
        <Link href={"/blog/" + props.slug}><a>
            <div className="blog-card">
            <h2 className="blog-card-title">{props.title}</h2>
                <Image src={props.img} width={1070} height={720}/>
                <p className="grey-text blog-pad-bot"><Date dateString={props.date} /></p>
                <p className="bottom-left">Read More</p>
            </div>
        </a></Link>
    </Col> 
    )
}