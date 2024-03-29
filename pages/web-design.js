import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import WaveBottom from '../components/wave-bottom'
import WaveTop from '../components/wave-top'
import ContactForm from '../components/contact-form'
import { Button } from '../components/button'
import { CheckIcon, ChatAlt2Icon, CurrencyPoundIcon, PresentationChartBarIcon, InboxIcon, PhoneIcon } from '@heroicons/react/outline'


export default function WebDesign() {
    const webcard = [
        {title: "Communication",
        color: "bg-blue-100 dark:bg-violet-900",
        information: "With a focus on your satisfaction, I handle all communication personally, ensuring clarity and eliminating any chance of miscommunication.",
        icon: ChatAlt2Icon
        },
        {title: "Full Control",
        color: "bg-teal-100 dark:bg-fuchsia-900",
        information: "Your satisfaction matters! Prior to launching any website, you will have the opportunity to review and approve all elements. This guarantees that your site reflects your vision entirely.",
        icon: CheckIcon
        },
        {title: "Affordable Web Design",
        color: "bg-green-100 dark:bg-fuchsia-900",
        information: "Say goodbye to unnecessary fees! As a freelancer, I prioritise maximising the value of every penny you invest in your website.",
        icon: CurrencyPoundIcon
        },
        {title: "Progress Tracking",
        color: "bg-green-100 dark:bg-rose-900",
        information: "I'll keep you informed throughout the entire process of your website's development, from start to finish. You'll never be left wondering about the progress.",
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
            <meta property="og:image" content="https://houghtonwebdesign.co.uk/images/houghtonwebdesign.png" />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="400" />
            <meta property="og:image:alt" content="Houghton Web Design Logo" />
        </Head>
        <div className='bg-gradient-to-r from-green-100 to-blue-100 dark:from-violet-900 dark:to-rose-900  dark:text-white px-3 pt-5 md:pt-20 pb-20 relative'>
            <h1 className='text-3xl mb-2'>Freelance Web Design and Development.</h1>
            <h2 className='text-2xl mb-4'>Why Choose Me?</h2>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 pb-4'>
            {webcard.map((item) => (
                <div key={item.title} className='bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg'>
                <div className={"mx-auto flex items-center justify-center h-20 w-20 rounded-full text-white " + item.color}>
                <item.icon className="h-8 w-8 text-indigo-700 dark:text-white" aria-hidden="true" />

                </div>          
                <p className='py-3 text-2xl'>{item.title}</p>
                <p className='text-gray-700 dark:text-gray-200'>{item.information}</p>

                </div>
            ))}
            </div>
            <Button 
                text="Get in contact"
                link="contact-us"
            />
            <WaveBottom />
        </div>
        <div className='dark:bg-gray-900 dark:text-white'>
        <div className='py-5 md:py-20 px-3 mx-auto max-w-7xl text-lg'>
            <h3 className='text-4xl mb-4'>What do I work with?</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                <div>
                    <p className='text-2xl mb-2 md:order-1'>React.JS</p>
                    <p className='text-justify text-gray-700 dark:text-gray-200'>React is an open-source language based on JavaScript. This is the language that my website is coded with. React utilises something called Single Page Applications (SPA), which creates an extremely fast and streamlined website, by loading the entire site upon initial entry. This cuts down on load times while navigating between different pages. This makes your site appear to the user, your client, to be cutting edge. As we all know in business, as in life, first impressions are key. Additionally, as React is open-source its security is regularly updated, helping to ensure that your website remains secure and safe.</p>
                </div>
                <div className='md:order-3'>
                    <Image src="/images/ReactLogoHoughtonWebDesign.png" width={125} height={125} alt="React Logo" />
                </div>
                <div className='md:order-2'>
                    <p className='text-2xl mb-2'>WordPress (CMS)</p>
                    <p className='text-justify text-gray-700 dark:text-gray-200'>WordPress is a hugely popular open-source web designing CMS or Content Management Software. This allows my clients to easily take over control of their content creation. WordPress started as a blogging service, however, with the addition of plug-ins, which can affect everything from security to functionality, it has become a hugely popular tool in every sector of business. WordPress estimates that a staggering 39% of the web has been built using their platform.</p>
                </div>
                <div className='md:order-4'>
                    <Image src="/images/WordPress.png" width={125} height={125} alt="wordpress logo" />
                </div>
            </div>
            </div>

        </div>
        <div className='text-lg bg-gradient-to-r from-green-100 to-blue-100 dark:from-violet-900 dark:to-rose-900 dark:text-white py-20 px-2 relative'>
            <WaveBottom />
            <WaveTop />
            <h4 className="text-4xl mb-4">What's Next?</h4>
            <p className='max-w-3xl mx-auto mb-3 text-gray-700 dark:text-gray-200'>I use a simple 5 step plan to make sure your affordable web design is completed to the highest standard and to your satisfaction, in the shortest possible time.</p>
            <div className='max-w-5xl mx-auto grid md:grid-cols-3'>
            <div></div>
            <ol className="relative border-l border-white text-left mx-auto md:order-2">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
                    <p className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-200">Initial Design & Function Talks</p>
                    <Button 
                        text="SEO & UI"
                        link="seo-kent"
                    />
            </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">First Draft Sent To You For Approval</p>
                </li>
                <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">Site Is Coded & Created</p>
                </li>
                <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">Final Site Is Sent To You For Review</p>
                </li>
                <li className="ml-4">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-white"></div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">Site Is QA Tested & Put Live</p>
                </li>
            </ol>

            </div>
        </div>
    <div className='dark:bg-gray-900 dark:text-white'>
    <div className='max-w-7xl mx-auto'>
        <div className="p-3 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
          <ContactForm />
          <div className='text-left my-auto'>
            <p className='text-2xl mb-2'>How can I help?</p>
            <p className="text-gray-700 mb-4 dark:text-gray-300">Thank you for considering my services! Whether you're
             looking for a free quote or simply want to discuss your exciting new project, I'm here to help. As a freelance 
             web designer, I assure you that you'll be pleasantly surprised by the affordability of my web design services. Please fill out the form, and I'll get back to you as soon as possible. Looking forward to hearing from you!</p>
            <hr />
            <p className='text-2xl my-2'>Contact information</p>
            <a href="mailto:info@houghtonwebdesign.co.uk"><p className='items-center text-gray-700 hover:underline mb-2 dark:text-gray-300'><InboxIcon className="inline h-6 w-6 text-indigo-700 mr-2 dark:text-gray-300" aria-hidden="true"/> info@houghtonwebdesign.co.uk</p></a>
            <p className='text-gray-700 mb-2 dark:text-gray-300'><PhoneIcon className="inline h-6 w-6 text-indigo-700 mr-2 dark:text-gray-300" aria-hidden="true"/>07999443163</p>
            <a href="https://www.facebook.com/HoughtonWebDesign"><p className='text-gray-700 hover:underline mb-2 dark:text-gray-300'><span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <span className="text-indigo-700 dark:text-gray-300">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="inline w-6 h-6 mr-2" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </span>
            </span>@HoughtonWebDesign</p></a>
          </div>
          </div>
      </div>
    </div>
      </>  
    )
}