import { getAllPostIds, getPostData } from '../../lib/posts';
import Image from 'next/image';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }){
    return(
    <>
    <Head>
        <title>{postData.title + ' | Houghton Web Design'}</title>
        <meta name="title" content={postData.title + ' | Houghton Web Design'}/>
        <meta name="description" content={postData.description}/>
        <meta property="og:title" content={postData.title + ' | Houghton Web Design'}/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="en"/>
        <meta property="og:site_name" content="Houghton Web Design"/>
        <meta property="og:url" content={'https://houghtonwebdesign.co.uk/blog/' + postData.id}/>
        <meta property="og:description" content={postData.description}/>
        <meta property="og:image" content={'https://houghtonwebdesign.co.uk' + postData.ogImg}/>
        <meta property="og:type" content="website" />
        <meta property="og:image:alt" content={postData.imgAlt} />
    </Head>
    <div className="max-w-5xl mx-auto">
        <h1 className='text-3xl'>{postData.title}</h1>
        <br />
        <div className="blog-img">
        <Image src={postData.img} width={534} height={360}/>
        </div>
        <br />
        <div className="blog-text text-left text-2xl" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <p className='text-left'>By Jordan Houghton</p>
        <p className='text-left'>{postData.date}</p>
    </div>
    </>
    )
}