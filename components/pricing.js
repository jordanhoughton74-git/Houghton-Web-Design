import Link from 'next/link'
import Head from 'next/head'
import { CheckIcon, ChevronUpIcon } from '@heroicons/react/outline'
import { Disclosure } from '@headlessui/react'

function TickPoint (props) {
    return <>
                <CheckIcon className='h-5 w-auto text-green-600'/>
                <p className='col-span-6'>{props.info}</p>
            </>
}

export default function Pricing(){ 
    return (
        <>
        <Head>
        <title>Pricing | Houghton Web Design</title>
        <meta name="title" content="Pricing |  Houghton Web Design"/>
        <meta name="description" content="View the pricing for our different website packages, catering to all industries as a freelance web designer"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="en"/>
        <meta property="og:title" content="Pricing | Web developer Kent, UK"/>
        <meta property="og:site_name" content="Houghton Web Design"/>
        <meta property="og:url" content="https://houghtonwebdesign.co.uk/pricing"/>
        <meta property="og:description" content="View the pricing for our different website packages, catering to all industries as a freelance web designer"/>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content="https://houghtonwebdesign.co.uk/images/houghtonwebdesign.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content="Houghton Web Design Logo" />
      </Head>
        <div className="dark:text-white bg-gradient-to-r from-green-100 to-blue-100 dark:from-violet-900 dark:to-rose-900 py-24 px-2 relative">
            <p className="text-xl">Pricing</p>
            <h1 className="text-4xl font-extrabold pb-5">The right price for you!</h1>
            <div className="grid grid-cols-1 md:grid-cols-10 text-black max-w-6xl mx-auto relative py-5">
                <div className="bg-white pt-5 rounded md:rounded-r-none md:rounded-l my-8 grid grid-cols-1 col-span-3">
                    <div className='py-4'>
                    <h2 className="text-2xl">Starter</h2>
                    <p className="text-5xl font-extrabold pb-6">£35 <span className="text-xl font-normal text-gray-600">/month</span></p>
                    </div>
                    <div className="bg-gray-100 h-full rounded md:rounded-r-none rounded-bl border-t text-left py-8 px-2 md:px-8 text-gray-700 grid grid-cols-7">
                        <TickPoint info="Bespoke Web Design"/>
                        <TickPoint info="30 min/month maintenance"/>
                        <TickPoint info="Free hosting"/>
                    </div>
                </div>
                <div className="bg-white rounded border-2 border-indigo-900 relative grid grid-cols-1 col-span-4">
                    <p className="bg-indigo-600 text-white text-xs font-extrabold py-1 px-3 rounded-full -mt-4 table mx-auto">Most Popular</p>
                    <div className='py-4'>
                    <h2 className="text-2xl font-bold pt-2">Performance</h2>
                    <p className="text-5xl font-extrabold pb-6">£50 <span className="text-xl font-normal text-gray-600">/month</span></p>
                    </div>
                    <div className="bg-gray-100 rounded-b border-t text-left py-8 md:px-8 px-2 text-gray-700 h-100 grid grid-cols-7">
                        <TickPoint info="Bespoke Web Design"/>
                        <TickPoint info="40 min/month maintenance"/>
                        <TickPoint info="Free hosting"/>
                        <TickPoint info="Built in Content Management System"/>
                        <TickPoint info="Free Consultation"/>
                    </div>
                </div>
                <div className="bg-white pt-5 rounded md:rounded-r md:rounded-l-none my-8 grid grid-cols-1 col-span-3">
                    <div className='py-4'>
                    <h2 className="text-2xl">Ecommerce</h2>
                    <p className="text-5xl font-extrabold pb-6">£65 <span className="text-xl font-normal text-gray-600">/month</span></p>
                    </div>
                    <div className="bg-gray-100 h-full rounded md:rounded-l-none rounded-br border-t text-left py-8 px-2 md:px-8 text-gray-700 grid grid-cols-7">
                        <TickPoint info="Performance plan features"/>
                        <TickPoint info="Ecommerce Ready"/>
                        <TickPoint info="Advice and Training"/>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 text-left md:pt-10 gap-1'>
                <div className='md:col-span-2'>
                    <h3 className='text-3xl font-extrabold pb-1'>Frequently Asked Questions</h3>
                    <p className='dark:text-gray-100 pb-4'>Can't find the answer? <Link href="/contact"><a className='text-indigo-800 dark:text-indigo-300 hover:text-indigo-700'>Contact</a></Link> me and I'll be more than happy to answer your questions.</p>
                </div>
                <div className='md:col-span-4 grid gap-3'>
                <Disclosure defaultOpen>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-purple-100 px-4 py-2 text-left  font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>What is included with a website subscription?</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 dark:text-gray-100 text-gray-500">
                            Every website that is created by Houghton Web Design is:
                            <ul className='list-disc list-inside'>
                                <li>Bespoke and Taylored to your business needs.</li>
                                <li>Hosted and Maintained by us so you can focus on doing what you are good at.</li>
                                <li>Fast and Secure, we use the latest technologies and security systems.</li>
                                <li>All websites will be submitted to Google for indexing, abiding to SEO best practices.</li>
                            </ul>
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-purple-100 px-4 py-2 text-left  font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Is there an initial setup fee?</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 dark:text-gray-100 text-gray-500">
                            When setting up a website we require an initial setup cost of <strong>£100</strong> and a minimum term of 6 months, this covers labour and domain fees needed to process a website.
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-purple-100 px-4 py-2 text-left  font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Can changes be made to the website past initial setup.</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 dark:text-gray-100 text-gray-500">
                            Yes! All packages provided off monthly maintenance starting from 30 minutes a month.  
                            Which is more than enough time for most changes.  If you choose the performance package 
                            it comes with an easy to use Content Management System so that you can make changes to text 
                            yourself whenever you like. <br />
                            If you require larger changes get in <Link href="/contact"><a className='text-indigo-800 dark:text-indigo-300 hover:text-indigo-700'>contact</a></Link> and I'll provide you with more information on how I can help you.
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-purple-100 px-4 py-2 text-left  font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Can't find a package that suits your needs?</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 dark:text-gray-100 text-gray-500">
                            If none of the existing packages align with your specific needs, 
                            don't worry! Simply get in <Link href="/contact"><a className='text-indigo-800 dark:text-indigo-300 hover:text-indigo-700'>touch</a></Link> with me, and I'll gladly create a 
                            custom package tailored specifically to suit your business requirements. 
                            Your satisfaction is my priority, and I'm here to ensure that you 
                            receive the perfect solution for your unique needs
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure>
                    {({ open }) => (
                        <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-white dark:bg-purple-100 px-4 py-2 text-left  font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span>Prefer a subscription-free experience?</span>
                            <ChevronUpIcon
                            className={`${
                                open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-purple-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 dark:text-gray-100 text-gray-500">
                        No need to stress if subscriptions aren't your thing or don't suit your business needs.  Simply
                        get in <Link href="/query"><a className='text-indigo-800 dark:text-indigo-300 hover:text-indigo-700'>contact</a></Link> for a free quote.
                        </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                </div>
            </div>
        </div>
        </>
    )
}