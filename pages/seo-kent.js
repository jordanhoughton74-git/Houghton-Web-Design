import Head from 'next/head'
import Image from 'next/image'
import WaveBottom from '../components/wave-bottom'
import WaveTop from '../components/wave-top'

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
        <meta property="og:image" content="https://houghtonwebdesign.co.uk/images/houghtonwebdesign.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="Houghton Web Design Logo" />
      </Head>
      <div className='dark:bg-gray-900 dark:text-white'>
      <div className='max-w-7xl mx-auto py-5 lg:py-20 px-3'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
              <div className='lg:order-last my-auto'>
                <h1 className='text-3xl pb-2 text-left'>User Interface and User Experience</h1>    
                <p className='text-gray-700 dark:text-gray-200 text-justify'>For a website to be successful, it must have both a sleek User Interface (UI) and a satisfying User Experience (UX). The UI and UX build foundations for return traffic and potential sales, as a Freelance Web Designer I understand just how important building relationships through UI can be.A clogged website might distract or confuse potential clients. My bespoke websites are designed with this in mind, by using a streamlined modern design, and are built using code languages designed for the fastest loading times. I will work closely with you to choose a style that is both related to your business and will be able to become a core component to its future success. If you can dream it, I can build it.</p>
              </div>
              <div className='lg:order-first my-auto'>
                 <Image className="rounded-lg" src="/images/UI-img.jpg" alt="code example" title="code example" width="480px" height="323px" />
              </div>
          </div>
      </div>
      </div>
      <div className='bg-gradient-to-r from-green-100 to-blue-100 dark:from-violet-900 dark:to-rose-900 py-20 px-3 relative'>
        <WaveBottom />
        <WaveTop />
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='my-auto'>
                    <h1 className='text-3xl pb-2 text-left dark:text-white'>Why is SEO important?</h1>    
                    <p className='text-gray-700 dark:text-gray-200 text-justify'>SEO stands for Search Engine Optimisation. It is a powerful tool for long running marketing, that will allow your customers to find your site through related web searches. This will increase your online exposure, and the quality and quantity of web traffic that you will receive. Your website will be created with SEO in mind, following best practices to increase your traffic and the potential growth of your business. As a freelance web designer, SEO is paramount to my own success and I can help any site from a startup to existing business.</p>
                </div>
                <div className='my-auto'>
                    <Image className="rounded-lg" src="/images/seo-img.jpg" alt="seo graphs" title="seo graphs" width="480px" height="320px" />
                </div>
            </div>
        </div>
      </div>
      <div className='dark:bg-gray-900 dark:text-white'>
      <div className='max-w-7xl mx-auto py-5 lg:py-20 px-3'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
              <div className='lg:order-last my-auto'>
                <h1 className='text-3xl pb-2 text-left'>Mobile Responsive</h1>    
                <p className='text-gray-700 dark:text-gray-200 text-justify'>It is now more important than ever to have a mobile responsive website. This means clients using a mobile device will have the same experience as someone using a desktop. It is estimated that over 52% of internet usage comes from Mobile Phones alone. ALL my websites are built with mobile responsiveness as a key component. Unlike many other web designers, I do not charge extra for this feature, as to me this is a necessity, and no website is complete without it. As you can see every element on my own Freelance Web Design site is mobile first, giving usability to the majority market.</p>
              </div>
              <div className='lg:order-first my-auto'>
                 <Image className="rounded-lg" src="/images/mobile-img.jpg" alt="mobile phone" title="mobile phone" width="480px" height="323px" />
              </div>
          </div>
      </div>
      </div>
      </>

    )}