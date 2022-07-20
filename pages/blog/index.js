import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
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
        <meta property="og:image" content="https://houghtonwebdesign.co.uk/images/houghtonwebdesign.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="Houghton Web Design Logo" />
  
</Head>
    <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-violet-900 dark:to-rose-900">
     <div className="py-10 px-3 max-w-4xl mx-auto">   
      <h1 className="text-3xl  dark:text-white">Blog Posts</h1>
      <p className="text-xl text-gray-700 dark:text-gray-200 pb-5">The main motivations, influences and inspirations from a freelance web designer</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch'>
        {allPostsData.sort((b, a) => a.number - b.number).map(({ id, date, title, img }) => (
          <Link href={"blog/" + id} key={id}><a>
            <div className='transition ease-in-out duration-300 rounded-lg shadow-lg bg-white p-5 h-full relative hover:-translate-y-6'>
            <p className='text-2xl'>{title}</p>
            <img src={img} width={534} height={360} alt={id} />
            <p className='text-gray-700 text-left pb-2'>{date}</p>
            <p className='absolute bottom-2 left-5'>Read More</p>
          </div>
          </a></Link>
            ))}
        </div> 
      </div>
    </div>
    </>
    )
}