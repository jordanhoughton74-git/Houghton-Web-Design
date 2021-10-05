import { getSortedPostsData } from '../../lib/posts'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import BlogCard from '../../components/blogCard';
import Head from 'next/head';

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
      <>
      <Head>
        <title>Freelance Web Designer Blog | Houghton Web Design Kent & UK</title>
        <meta name="title" content="Freelance Web Designer Blog | Houghton Web Design Kent & UK"/>
        <meta name="description" content="The day in the life of a freelance web designer, I discuss major motivators, turning points and key technologies to my successes"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="en"/>
        <meta property="og:title" content="Freelance Web Designer Blog | Houghton Web Design Kent"/>
        <meta property="og:site_name" content="Houghton Web Design"/>
        <meta property="og:url" content="https://houghtonwebdesign.co.uk/blog/"/>
        <meta property="og:description" content="The day in the life of a freelance web designer, I discuss major motivators, turning points and key technologies to my successes"/>
        <meta property="og:type" content="website"></meta>
  
</Head>
    <section className="gradient-section">
      
     <div className="wrapper-small pad-top">   
      <Container fluid>
      <h1 className="blog-title">Blog Posts</h1>
      <p className="blog-title blog-sub">The main motivations, influences and inspirations from a freelance web designer</p>
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
    </>
    )
}