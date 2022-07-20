import Head from 'next/head'
import Image from 'next/image'
import WaveBottom from '../components/wave-bottom'
import WaveTop from '../components/wave-top'

export default function Portfolio(){
    return(
        <>
        <Head>
        <title>Portfolio - Freelance Web Designer | Houghton Web Design</title>
            <meta name="title" content="Portfolio - Freelance Web Designer | Houghton Website Development"/>
            <meta name="description"
            content="My Portfolio. View my work and the story behind the examples.  Houghton Web Design." />
            <meta name="robots" content="index, follow"/>
            <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8"/>
            <meta name="language" content="en"/>
            <meta property="og:title" content="Freelance Web Designer | Web developer Kent, UK"/>
            <meta property="og:site_name" content="Houghton Web Design"/>
            <meta property="og:url" content="https://houghtonwebdesign.co.uk/portfolio/"/>
            <meta property="og:description" content="I'm Jordan a freelance web designer based in Kent, UK. I deliver bespoke web design and developer services"/>
            <meta property="og:type" content="website"></meta>
            <meta property="og:image" content="https://houghtonwebdesign.co.uk/images/houghtonwebdesign.png" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="400" />
            <meta property="og:image:alt" content="Houghton Web Design Logo" />
        </Head>
        <div className='pt-10 pb-20 bg-gradient-to-r from-green-100 to-blue-100 dark:from-violet-900 dark:to-rose-900 dark:text-white relative'>
            <h1 className='text-3xl'>Portfolio</h1>
            <h2 className='text-2xl'>Houghton Web Design</h2>
            <WaveBottom />
        </div>
        <div className='dark:bg-gray-900 dark:text-white'>
        <div className='max-w-7xl py-5 md:py-16 mx-auto px-2'>
            <p className='text-3xl mb-2'>Mandate Monday</p>
            <p className='text-gray-700 dark:text-gray-200 max-w-5xl mx-auto mb-4'>A podcast website with an eye catching mix of dark themes and bright colours to draw users to the important information. Mandate Monday is a lightning fast website built on Next.js with easy-to-use add new episode functionality, which automatically fills the home page with and episode page.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <div className='my-auto'>
                    <Image src="/images/Gallery/Gallery10.png" alt="Mandate Monday Home Page" title="Mandate Monday Home Page" width="480px" height="199px"  />
                </div>
                <div className='my-auto'>
                    <Image src="/images/Gallery/Gallery11.png" alt="Mandate Monday About Page" title="Mandate Monday About Page" width="480px" height="190px"  />
                </div>
                <div className='my-auto'>
                    <Image src="/images/Gallery/Gallery12.png" alt="Mandate Monday Episodes Page" title="Mandate Monday Episodes Page" width="480px" height="201px"  />
                </div>
            </div>
            </div>
        </div>
        <div className='bg-gradient-to-r from-green-100 to-blue-100 dark:from-violet-900 dark:to-rose-900 dark:text-white py-20 relative px-2'>
            <WaveBottom />
            <WaveTop />
            <div className='max-w-7xl mx-auto'>
                <p className='text-3xl mb-2'>Will's Success Way - An Online Booking Website</p>
                <p className='text-gray-700 dark:text-gray-200 max-w-5xl mx-auto mb-4'>Will's Success Way is a website designed to be capable of advertising English tutorage and ultimately booking clients for lessons. The colour scheme of blue is designed to match the logo and also create an inviting atmosphere. Information spaced out in a manner that students with less English knowledge can easily navigate.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    <div className='my-auto'>
                    <Image src="/images/Gallery/Gallery13.png" alt="Mandate Monday Home Page" title="Mandate Monday Home Page" width="480px" height="296px"  />
                    </div>
                    <div className='my-auto'>
                    <Image src="/images/Gallery/Gallery14.png" alt="Mandate Monday About Page" title="Mandate Monday About Page" width="480px" height="226px"  />
                    </div>
                    <div className='my-auto'>
                    <Image src="/images/Gallery/Gallery15.png" alt="Mandate Monday Episodes Page" title="Mandate Monday Episodes Page" width="480px" height="244px"  />
                    </div>
                </div>
            </div>
        </div>
        <div className='dark:bg-gray-900 dark:text-white'>
        <div className='max-w-7xl py-5 md:py-16 mx-auto px-2'>
            <p className='text-3xl mb-2'>E-Commerce - An Online Flower Store</p>
            <p className='text-gray-700 dark:text-gray-200 max-w-5xl mx-auto mb-4'>A vibrant flower online flower store created on Wordpress, so the client can take advantage of the simple to use built-in CMS. I made sure to use the best and most colourful images to attract the eye and seal the deal. Fully customised landing, product and catalogue pages were created to fit in with the central theme.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <div className='my-auto'>
                <Image src="/images/Gallery/Gallery1.png" alt="Flower shop single item" title="Flower shop single item" width="480px" height="264px"  />
                </div>
                <div className='my-auto'>
                <Image src="/images/Gallery/Gallery8.png" alt="Flower shop home page" title="Flower shop home page" width="480px" height="208px"  />
                </div>
                <div className='my-auto'>
                <Image src="/images/Gallery/Gallery9.png" alt="Flower shop new items" title="Flower shop new items" width="480px" height="236px"  />
                </div>
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-r from-green-100 to-blue-100 dark:from-violet-900 dark:to-rose-900 dark:text-white py-20 relative px-2'>
            <WaveBottom />
            <WaveTop />
            <div className='max-w-7xl mx-auto'>
                <p className='text-3xl mb-2'>Wedding Venue - A Brochure Site</p>
                <p className='text-gray-700 dark:text-gray-200 dark:text-gray-200 max-w-5xl mx-auto mb-4'>A fast single page application designed to advertise a wedding venue and the various servcies/prdoucts which are offered. It features downloadable menus to entice bookings. Styleish fonts and incredible vibrant photos to catch the viewers eye.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                    <div className='my-auto'>
                    <Image src="/images/Gallery/Gallery2.png" alt="wedding venue" title="wedding venue" width="480px" height="186px"  />
                    </div>
                    <div className='my-auto'>
                    <Image src="/images/Gallery/Gallery3.png" alt="wedding menu" title="wedding menu" width="350px" height="334px"  />
                    </div>
                    <div className='my-auto'>
                    <Image src="/images/Gallery/Gallery4.png" alt="wedding gallery" title="wedding gallery" width="480px" height="214px"  />
                    </div>
                </div>
            </div>
        </div>
        <div className='dark:bg-gray-900 dark:text-white'>
        <div className='max-w-7xl py-5 md:py-16 mx-auto px-2'>
            <p className='text-3xl mb-2'>Spa and Wellbing - Online advertisement</p>
            <p className='text-gray-700 dark:text-gray-200 dark:text-gray-200 max-w-5xl mx-auto mb-4'>A website designed to increase sales and advertise the beautiful Spa and Wellbeing offerings. The website has a multitude of functions, including gallery carousels and informational cards.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div className='my-auto'>
                <Image src="/images/Gallery/Gallery6.png" alt="Spa about page" title="Spa about page" width="600px" height="292px"  />
                </div>
                <div className='my-auto'>
                <Image src="/images/Gallery/Gallery7.png" alt="Spa informatiom cards" title="Spa informatiom cards" width="600px" height="299px"  />
                </div>
            </div>
            </div>
        </div>
        
        </>

    )
}