import Head from 'next/head'
import Image from 'next/image'
import WaveBottom from '../components/wave-bottom'
import WaveTop from '../components/wave-top'
import { Button } from '../components/button'


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
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 pb-4'>
              <div className='lg:order-last my-auto'>
                <h1 className='text-3xl pb-2 text-left'>User Interface and User Experience</h1>    
                <p className='text-gray-700 dark:text-gray-200 text-justify'>To ensure a website's success, it needs a 
                captivating User Interface (UI) and an exceptional User Experience (UX). As a Freelance Web Designer, I 
                fully grasp the significance of establishing relationships through UI. I prioritise creating sleek and 
                user-friendly websites that minimise distractions and confusion for potential clients. By leveraging 
                streamlined modern designs and optimising loading times with efficient code languages, I guarantee an 
                engaging browsing experience. Let's collaborate closely to select a style that aligns with your business 
                and serves as a cornerstone for its future triumph. Whatever you envision, I have the skills to bring it 
                to life!</p>
              </div>
              <div className='lg:order-first my-auto'>
                 <Image className="rounded-lg" src="/images/UI-img.jpg" alt="code example" title="code example" width="480px" height="323px" />
              </div>
          </div>
          <Button 
            text="View my work"
            link="/portfolio"
            />
      </div>
      </div>
      <div className='bg-gradient-to-r from-green-100 to-blue-100 dark:from-violet-900 dark:to-rose-900 py-20 px-3 relative'>
        <WaveBottom />
        <WaveTop />
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='my-auto'>
                    <h1 className='text-3xl pb-2 text-left dark:text-white'>Why is SEO important?</h1>    
                    <p className='text-gray-700 dark:text-gray-200 text-justify'>Let's unravel the power of Search Engine 
                    Optimization (SEO)! By optimising your website, your customers can easily discover you through relevant web 
                    searches, boosting your online exposure and attracting quality web traffic. As a freelance web designer, 
                    I prioritise SEO as a crucial element for my own success, and I'm well-equipped to assist both startups 
                    and existing businesses. Your website will be meticulously crafted with SEO best practices, ensuring 
                    increased traffic and the potential for significant business growth. Let's join forces and unlock the 
                    true potential of your online presence!</p>
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
                <p className='text-gray-700 dark:text-gray-200 text-justify'>In today's digital landscape, having a mobile 
                responsive website is absolutely crucial. It ensures that clients using mobile devices have the same seamless 
                experience as those on desktops. With over 52% of internet usage originating from mobile phones, catering to 
                this audience is essential. Rest assured, every website I create as a freelance web designer prioritises mobile 
                responsiveness as a fundamental aspect. Unlike many others, I don't charge extra for this vital feature, as I 
                believe it is a necessity and no website should be without it. Just like my own Freelance Web Design site, which is 
                designed with a mobile-first approach, I aim to deliver optimal usability to the majority market. Let's make your 
                website shine on any device!</p>
              </div>
              <div className='lg:order-first my-auto'>
                 <Image className="rounded-lg" src="/images/mobile-img.jpg" alt="mobile phone" title="mobile phone" width="480px" height="323px" />
              </div>
          </div>
      </div>
      </div>
      </>

    )}