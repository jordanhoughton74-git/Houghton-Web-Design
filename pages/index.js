import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import WaveTop from '../components/wave-top'
import WaveBottom from '../components/wave-bottom'
import { Button } from '../components/button'
import { ChartSquareBarIcon, ChatAlt2Icon, CurrencyPoundIcon, InboxIcon, PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'

export default function Home() {
  const card = [
    {title: "Bespoke Web Designs",
    color: "bg-blue-100 dark:bg-violet-900",
    information: "From inception to completion, I'll be your sole point of contact. This allows me to create Bespoke Web Designs tailored around you and most importantly your website.",
    icon: ChatAlt2Icon
    },
    {title: "SEO",
    color: "bg-teal-100 dark:bg-fuchsia-900",
    information: "Fast & Responsive. ALL websites created are built with Search Engine Optimisation in mind and are built to be mobile responsive, ensuring your business does not miss out on the 52% of people that surf the internet using their phones.",
    icon: ChartSquareBarIcon
    },
    {title: "Pricing",
    color: "bg-green-100 dark:bg-rose-900",
    information: "Step into the world of Houghton Web Design, where transparency is our motto! Our pricing scheme keeps you fully informed about all the costs involved. Let's embark on this exciting journey together!",
    icon: CurrencyPoundIcon
    }
  ]

  return (
    <>
    <Head>
      <title>Freelance Web Designer Kent & UK | Houghton Web Design</title>
      <meta name="title" content="Freelance Web Designer Kent & UK |  Houghton Web Design"/>
      <meta name="description" content="Hi, I'm Jordan! A freelance web designer based in Sittingbourne, Kent.  Delivering affordable web design. Houghton Web Design."/>
      <meta name="robots" content="index, follow"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="language" content="en"/>
      <meta property="og:title" content="Freelance Web Designer | Web developer Kent, UK"/>
      <meta property="og:site_name" content="Houghton Web Design"/>
      <meta property="og:url" content="https://houghtonwebdesign.co.uk"/>
      <meta property="og:description" content="I'm Jordan Houghton a freelance web designer based in Kent, UK. I deliver bespoke web design and developer services"/>
      <meta property="og:type" content="website"></meta>
      <meta property="og:image" content="https://houghtonwebdesign.co.uk/images/houghtonwebdesign.png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="400" />
      <meta property="og:image:alt" content="Houghton Web Design Logo" />
    </Head>
    <div className="home-top relative dark:text-white dark:bg-gray-900" alt="Houghton Web Design Background">
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto hero'>
        <div className='my-auto lg:text-left px-5 py-5 pt-10 md:py-10'>
          <h1 className='text-4xl pb-2 font-extrabold'>Houghton Web Design</h1>
          <h2 className='text-3xl font-semibold pb-3'>Start your web journey today!</h2>
          <Link href="/web-design"><a className="bt-hero bt-hero-one bt-hero-color-two text-xl px-10 py-4">
                  <span>Find out more</span>
          </a></Link>
        </div>
        <div className='my-auto mx-auto py-16'>
          <img src="/images/mobile-phone.svg" alt="mobile phone" className='lg:rotate-12 pr-12 pb-4 lg:pr-0 lg:pb-0' width={420} height={520} />
        </div>
      </div>
      <WaveBottom />
    </div>
    <div className='dark:bg-gray-900 dark:text-white'>
    <div className='max-w-7xl mx-auto py-5 md:py-20 grid grid-cols-1 md:grid-cols-2 px-3'>
      <div className='text-left text-lg'>
        <h3 className='text-3xl pb-2'>Freelance Web Designer & Developer</h3>
          <p className="text-gray-600 dark:text-gray-300">Are you in search of a stunning website that will leave a 
          <strong> lasting impression?</strong> Look no further! At Houghton Web Design, we specialise in crafting remarkable online 
          experiences tailored to your needs. Whether you're looking to establish a brand-new website or give your 
          existing one a refreshing makeover, we've got you covered. My name is Jordan Houghton and I am dedicated to 
          delivering <strong>fast, powerful, and budget-friendly websites</strong> that cater to businesses of all sizes. Get in touch 
          with us today and let's explore 
          how Houghton Web Design can bring your online vision to life!.</p>
        <h4 className='text-2xl py-2'>Welcome to my services!</h4>
          <p className="text-gray-700 dark:text-gray-300">As a Freelance Web Designer based in Sittingbourne, Kent, 
          I specialise in crafting personalised websites just for you. From inception to completion, I'll handle everything,
           including ongoing maintenance to ensure your website remains in its best condition. Rest assured knowing that 
           I'll provide you with an SSL certificate, guaranteeing a secure browsing experience for your visitors. Building 
           a strong online relationship starts with a secure foundation, and I've got you covered!</p>
        <h4 className='text-2xl py-2'>Pricing Structure as a Web Design Freelancer</h4>
          <p className="text-gray-700 dark:text-gray-300">Feel free to get in touch with me for a complimentary quote! 
          I'm the proud owner and sole employee of this business, which means I have very minimal expenses. As a result, I 
          can provide you with the most competitive price imaginable for your website. Don't hesitate to reach out and let's
           discuss your needs!</p>
        {/* <h4 className='text-2xl py-2'>Your Choice of Code.</h4>
          <p className="text-gray-700 dark:text-gray-300 pb-3">I work with React.JS, Next.JS and WordPress to create the best websites
            imaginable.  Using multiple styles of code allows me to customise the website entirely to your needs, whether you need lightning-fast responsiveness or an easy-to-use CMS (Content Management System), <strong>I will have you covered.</strong></p> */}
      </div>
      <div className='my-auto pt-5'>
        <Image src="/images/hwd-setup.jpeg" className="rounded-xl" width={400} height={344} alt="React Logo" />
        <div className='pt-3'>
        <Button 
         text="Contact Me"
         link="contact-us"
        />
          
        </div>
      </div>
    </div>
    </div>
    <div className='bg-gradient-to-r from-green-100 to-blue-100 dark:from-violet-900 dark:to-rose-900 py-24 px-2 relative'>
      <WaveBottom />
      <WaveTop />
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 pb-7 text-lg'>
      {card.map((item) => (
        <div key={item.title} className='bg-white dark:bg-slate-800 p-4 rounded-lg shadow dark:hello'>
          <div className={"mx-auto flex items-center justify-center h-20 w-20 rounded-full text-white " + item.color}>
          <item.icon className="h-8 w-8 text-indigo-700 dark:text-white" aria-hidden="true" />
          </div>          
          <p className='py-3 text-2xl dark:text-white'>{item.title}</p>
          <p className='text-gray-700 dark:text-gray-200'>{item.information}</p>

        </div>
      ))}
      </div>
      <Button 
        text="View the process"
        link="/web-design"
      />
    </div>
    <div className='dark:bg-gray-900 dark:text-white'>
    <div className='max-w-7xl mx-auto'>
      <div className="p-3 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
          <div className='text-left my-auto'>
            <p className='text-4xl mb-2 font-extrabold'>Let's Get Started</p>
            <p className="text-gray-700 dark:text-gray-200 mb-4 text-xl">
              I'd love to hear from you.  Send me a message or give me a call and we can chat about your project.
            </p>
            <Button 
              text="Message Me"
              link="/contact-us"
            />
          </div>
          <div className='mx-auto'>
          <img alt="contact us" src="/images/contact-us.svg" width={300} height={300} />
        </div>
      </div>
      </div>
    </div>
    </>
  )}