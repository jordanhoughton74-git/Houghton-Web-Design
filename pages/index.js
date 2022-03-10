import Head from 'next/head'
import Image from 'next/image'
import WaveTop from '../components/wave-top'
import WaveBottom from '../components/wave-bottom'
import ContactForm from '../components/contact-form'
import { ChartSquareBarIcon, ChatAlt2Icon, CurrencyPoundIcon, InboxIcon, PhoneIcon } from '@heroicons/react/outline'

export default function Home() {
  const card = [
    {title: "Bespoke Web Designs",
    color: "bg-blue-100",
    information: "From inception to completion, I'll be your sole point of contact. This allows me to create Bespoke Web Designs tailored around you and most importantly your website.",
    icon: ChatAlt2Icon
    },
    {title: "SEO",
    color: "bg-teal-100",
    information: "Fast & Responsive. ALL websites created are built with Search Engine Optimisation in mind and are built to be mobile responsive, ensuring your business does not miss out on the 52% of people that surf the internet using their phones.",
    icon: ChartSquareBarIcon
    },
    {title: "Pricing",
    color: "bg-green-100",
    information: "From inception to completion, I'll be your sole point of contact. This allows me to create Bespoke Web Designs tailored around you and most importantly your website.",
    icon: CurrencyPoundIcon
    }
  ]

  return (
    <>
    <Head>
      <title>Freelance Web Designer Kent & UK | Houghton Web Design</title>
      <meta name="title" content="Freelance Web Designer Kent & UK|  Houghton Web Design"/>
      <meta name="description" content="Hi, I'm Jordan! A freelance web designer based in Sittingbourne, Kent.  Delivering affordable web design. Houghton Web Design."/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="Freelance Web Designer | Web developer Kent, UK"/>
      <meta property="og:site_name" content="Houghton Web Design"/>
      <meta property="og:url" content="https://houghtonwebdesign.co.uk"/>
      <meta property="og:description" content="I'm Jordan Houghton a freelance web designer based in Kent, UK. I deliver bespoke web design and developer services"/>
      <meta property="og:type" content="website"></meta>
    </Head>
    <div className="home-top relative" alt="Houghton Web Design Background">
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto hero'>
        <div className='my-auto lg:text-left'>
          <h1 className='text-4xl pb-2'>Houghton Web Design</h1>
          <h2 className='text-3xl'>Your web journey starts today</h2>
        </div>
        <div className='my-auto mx-auto'>
          <img src="/images/mobile-phone.svg" alt="mobile phone" className='lg:rotate-12' width={420} height={520} />
        </div>
      </div>
      <WaveBottom />
    </div>
    <div className='max-w-7xl mx-auto py-5 md:py-20 grid grid-cols-1 md:grid-cols-2 px-3'>
      <div className='text-left'>
        <h3 className='text-3xl pb-2'>Freelance Web Designer & Developer</h3>
          <p className="text-gray-600">Welcome to Houghton Web Design.  My name is Jordan Houghton and I am a Freelance Web Developer & Designer based in Sittingbourne, Kent with a passion for user experience. 
          Please feel free to contact me about starting our project together. You will be amazed by what we can achieve.
          The process to creating your dream website begins by filling out the form or sending me an email.</p>
        <h4 className='text-2xl py-2'>How Can I Help You?</h4>
          <p className="text-gray-700"><strong>Design, Development & Maintenance.</strong>  As a Freelance Web Designer I can create your website from scratch and will take care of all maintenance
          for as long as you wish.  This includes an SSL certificate, which will allow visitors to see your site as 
          being secure.  This is paramount in building any online relationship.</p>
        <h4 className='text-2xl py-2'>Pricing Sructure as a Web Design Freelancer</h4>
          <p className="text-gray-700">Contact me for a <strong>free quote</strong>. As the sole employee and owner of the business, I have incredibly low overheads.  This allows me to offer you the best price possible for your site.</p>
        <h4 className='text-2xl py-2'>Your Choice of Code.</h4>
          <p className="text-gray-700">I work with React.JS, Next.JS and WordPress to create the best websites
            imaginable.  Using multiple styles of code allows me to customise the website entirely to your needs, whether you need lightning-fast responsiveness or an easy-to-use CMS (Content Management System), <strong>I will have you covered.</strong></p>
      </div>
      <div className='my-auto'>
        <Image src="/images/ReactLogoHoughtonWebDesign.png" width={250} height={250} alt="React Logo" />
      </div>
    </div>
    <div className='bg-gradient-to-r from-green-100 to-blue-100 py-24 px-2 relative'>
      <WaveBottom />
      <WaveTop />
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3'>
      {card.map((item) => (
        <div key={item.title} className='bg-white p-4 rounded-lg shadow'>
          <div className={"mx-auto flex items-center justify-center h-20 w-20 rounded-full text-white " + item.color}>
          <item.icon className="h-8 w-8 text-indigo-700" aria-hidden="true" />

          </div>          
          <p className='py-3 text-2xl'>{item.title}</p>
          <p className='text-gray-700'>{item.information}</p>

        </div>
      ))}
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
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 mr-2 inline" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </span>
            </span>@HoughtonWebDesign</p></a>
          </div>
      </div>
    </div>
    </>
  )}