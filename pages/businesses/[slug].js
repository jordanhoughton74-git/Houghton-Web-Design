import Head from "next/head"
import Image from "next/image"

import businesses from "../../content/businesses"


export default function Example ({ post }) {
    return (
      <>
      <Head>
      <title>How to find more {post.Plural} jobs | Houghton Web Design</title>
      <meta name="title" content={"How to find more" + post.Plural + "jobs |  Houghton Web Design"}/>
      <meta name="description" content={"We take a look into how to find for more opportunities in the" + post.plural + "sector"}/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
    </Head>
        <div className="dark:bg-gray-900 dark:text-white px-2">
            <div className="max-w-4xl mx-auto py-10 text-left">
                <h1 className="text-3xl font-extrabold text-center pb-3">How to find more {post.Plural} jobs</h1>
                <div className="text-center">
                <Image className="mx-auto" src={"/images/businesses/" + post.Img +".jpg"} height={450} width={800} />
                </div>
                <p className="py-5 dark:text-gray-200 text-lg">No matter which industry you are in there is always the issue of finding more 
                    leads and ultimately more jobs. There are a few tried and tested methods that
                    can help push your business to the next level and secure gradual but constant lead generation.

                </p>
                <h2 className="text-2xl font-extrabold">5 Ways to find more more leads:</h2>
                <ol className="list-decimal list-inside">
                    <li className="font-extrabold text-xl">Word of Mouth
                            <p className="font-thin text-lg pt-2">Possibly the most simple but also the most effective, ask any previous client or friends to 
                                recomend your serivces, it can be surprising how many jobs can be found this way.   
                                If you have done a good job, don't be afraid of asking for a review or testimonial to 
                                further show off your skills.</p>
                    </li>
                    <li className="font-extrabold text-xl pt-2">Social Media
                            <p className="font-thin text-lg py-2">
                            Social Media is a powerful and mostly free method of finding leads.  You can very easily 
                            create an account for your business and post images of the successes you have had to show 
                            off your quality.  Make sure you post images as well as explanations of the jobs.  Joining 
                            local groups and posting adverts can be an effective way of spreading your name.
                            </p>
                    </li>
                    <li className="font-extrabold text-xl">Company Website
                            <p className="font-thin text-lg pt-2">
                            An effective, visually appealing, easy-to-use website can be one of the best tools for marketing.  
                            The professional style can help to reinforce your values and being even more credibility to your 
                            organisation.</p>
                            <p className="font-thin text-lg py-2">Once indexed on Google it can also bring in organic and repeatable business and with 
                                effective SEO you can target local areas for business. 
                            </p>
                    </li>
                    <li className="font-extrabold text-xl">Networking
                            <p className="font-thin text-lg py-2">
                            Networking can be a daunting prospect, but once you have been in a certain industry for 
                            long enough it becomes an easy task.  Simply use business social medias such as LinkedIn 
                            and get in contact with other professionals either in your industry or in a similar one.  
                            You will surprised how many people can help and you may strike up a good relationship with 
                            someone who you can send work that you can’t do too.
                            </p>
                    </li>
                    <li className="font-extrabold text-xl">Local Businesses
                            <p className="font-thin text-lg py-2">
                            Get in contact with Local Businesses, enquire if they'll need a project done either now or 
                            in the future.  Don't be disheartened if you hear nothing back as that is the nature of this 
                            method, but with enough perseverance you can find some amazing leads.
                            </p>
                    </li>
                </ol>
            </div>
        </div>
        </>
        )
}

export async function getStaticPaths() {
    const posts = businesses;
    const paths = posts.map((post) => ({
      params: { slug: post.Slug }
    }));
  
    return {
      paths,
      fallback: false
    };
  }
  
  export async function getStaticProps({ params }) {
    const { slug } = params;
    const post = businesses.find((p) => p.Slug === slug);
  
    return {
      props: { post }
    };
  }