import { getSortedPostsData } from '../../lib/posts'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import BlogCard from '../../components/blogCard';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }){
    return(
    <section className="gradient-section">
     <div className="wrapper-small pad-top">   
      <Container fluid>
        <Row>
        {allPostsData.map(({ id, date, title, img }) => (

            <BlogCard
                key={id}
                title={title}
                date={date}
                img={img}
                slug={id}
            
            />
            ))}

        </Row> 
      </Container>
      </div>
    </section>
    )
}