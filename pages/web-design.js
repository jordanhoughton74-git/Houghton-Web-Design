import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import WaveBottom from '../components/wave-bottom'
import WaveTop from '../components/wave-top'
import ContactForm from '../components/contact-form'
import { CheckIcon, ChatAlt2Icon, CurrencyPoundIcon, PresentationChartBarIcon, InboxIcon, PhoneIcon } from '@heroicons/react/outline'


export default function WebDesign() {
    const webcard = [
        {title: "Communication",
        color: "bg-blue-100",
        information: "My client is my top prioty. As such all communication goes through me, cutting out anyone else and any chance of miscommunication.",
        icon: ChatAlt2Icon
        },
        {title: "Full Control",
        color: "bg-teal-100",
        information: "Want something changed or revised? Before any website goes live, you will have to sign off on all elements. This will ensure that your site is entirely as you wished.",
        icon: CheckIcon
        },
        {title: "Affordable Web Design",
        color: "bg-green-100",
        information: "Cut out fees every penny you spend on your Website is spent on developing the best possible solution. Being a freelancer means affordable web design for you.",
        icon: CurrencyPoundIcon
        },
        {title: "Progess Tracking",
        color: "bg-green-100",
        information: "I will keep you updated on progression of the website from start to finish, so you are never left second guessing.",
        icon: PresentationChartBarIcon
        }
      ]
    return (
        
      <>
        <Head>
        <title>Affordable Web Designer | Freelance Web Design</title>
            <meta name="title" content="Affordable Web Designer | Freelance Web Design" />
            <meta name="description" content="I'm Jordan a freelance web designer, delivering affordable web design.  Take a look at my bespoke web designs and get in contact to see just how affordable my web design is." />
            <meta name="robots" content="index, follow"/>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            <meta name="language" content="en"/>  
            <meta property="og:title" content="Freelance Web Designer | Web developer Kent, UK"/>
            <meta property="og:site_name" content="Houghton Web Design"/>
            <meta property="og:url" content="https://houghtonwebdesign.co.uk/web-design/"/>
            <meta property="og:description" content="I'm Jordan a freelance web designer based in Kent, UK. I deliver bespoke web design and developer services"/>
            <meta property="og:type" content="website"></meta>
        </Head>
        <div className='bg-gradient-to-r from-green-100 to-blue-100 px-3 pt-5 md:pt-20 pb-20 relative'>
            <h1 className='text-3xl mb-2'>Freelance Web Design and Development.</h1>
            <h2 className='text-2xl mb-4'>Why Choose Me?</h2>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3'>
            {webcard.map((item) => (
                <div key={item.title} className='bg-white p-4 rounded-lg shadow-lg'>
                <div className={"mx-auto flex items-center justify-center h-20 w-20 rounded-full text-white " + item.color}>
                <item.icon className="h-8 w-8 text-indigo-700" aria-hidden="true" />

                </div>          
                <p className='py-3 text-2xl'>{item.title}</p>
                <p className='text-gray-700'>{item.information}</p>

                </div>
            ))}

            </div>
            <WaveBottom />
        </div>
        <div className='py-5 md:py-20 px-3 mx-auto max-w-7xl'>
            <h3 className='text-4xl mb-4'>What do I work with?</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                <div>
                    <p className='text-2xl mb-2 md:order-1'>React.JS</p>
                    <p className='text-justify text-gray-700'>React is an open-source language based on JavaScript. This is the language that my website is coded with. React utilises something called Single Page Applications (SPA), which creates an extremely fast and streamlined website, by loading the entire site upon initial entry. This cuts down on load times while navigating between different pages. This makes your site appear to the user, your client, to be cutting edge. As we all know in business, as in life, first impressions are key. Additionally, as React is open-source its security is regularly updated, helping to ensure that your website remains secure and safe.</p>
                </div>
                <div className='md:order-3'>
                    <Image src="/images/ReactLogoHoughtonWebDesign.png" width={125} height={125} alt="React Logo" />
                </div>
                <div className='md:order-2'>
                    <p className='text-2xl mb-2'>WordPress (CMS)</p>
                    <p className='text-justify text-gray-700'>WordPress is a hugely popular open-source web designing CMS or Content Management Software. This allows my clients to easily take over control of their content creation. WordPress started as a blogging service, however, with the addition of plug-ins, which can affect everything from security to functionality, it has become a hugely popular tool in every sector of business. WordPress estimates that a staggering 39% of the web has been built using their platform.</p>
                </div>
                <div className='md:order-4'>
                    <Image src="/images/WordPress.png" width={125} height={125} alt="wordpress logo" />
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-r from-green-100 to-blue-100 py-20 px-2 relative'>
            <WaveBottom />
            <WaveTop />
            <h4 className="text-4xl mb-4">What's Next?</h4>
            <p className='max-w-3xl mx-auto mb-3 text-gray-700'>I use a simple 5 step plan to make sure your affordable web design is completed to the highest standard and to your satisfaction, in the shortest possible time.</p>
            <div className='max-w-5xl mx-auto grid md:grid-cols-3'>
            <div></div>
            <ol className="relative border-l border-white text-left mx-auto md:order-2">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
                    <p className="mb-4 text-lg font-semibold text-gray-900">Initial Design & Function Talks</p>
                    <Link  href="/seo-kent"><a className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">SEO & UI <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></a></Link>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
                    <p className="text-lg font-semibold text-gray-900">First Draft Sent To You For Approval</p>
                </li>
                <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
                    <p className="text-lg font-semibold text-gray-900">Site Is Coded & Created</p>
                </li>
                <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
                    <p className="text-lg font-semibold text-gray-900">Final Site Is Sent To You For Review</p>
                </li>
                <li className="ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
                    <p className="text-lg font-semibold text-gray-900">Site Is QA Tested & Put Live</p>
                </li>
            </ol>

            </div>
        </div>
    <div className='max-w-7xl mx-auto'>
        <div className="m-3 md:m-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
          <ContactForm />
          <div className='text-left my-auto'>
            <p className='text-2xl mb-2'>How can I help?</p>
            <p className="text-gray-700 mb-4">Fill out the form for a free quote or just a chat about your new project and I'll get back as soon as possible. As a freelance web designer you'll be suprised just how affordable web design can be.</p>
            <hr />
            <p className='text-2xl my-2'>Contact information</p>
            <a href="mailto:info@houghtonwebdesign.co.uk"><p className='items-center text-gray-700 hover:underline mb-2'><InboxIcon className="inline h-6 w-6 text-indigo-700 mr-2" aria-hidden="true"/> info@houghtonwebdesign.co.uk</p></a>
            <p className='text-gray-700 mb-2'><PhoneIcon className="inline h-6 w-6 text-indigo-700 mr-2" aria-hidden="true"/>07999443163</p>
            <a href="https://www.facebook.com/HoughtonWebDesign"><p className='text-gray-700 hover:underline mb-2'><span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <span className="text-indigo-700">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 mr-2" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </span>
            </span>@HoughtonWebDesign</p></a>
          </div>
      </div>
    </div>
      </>  
    )
}