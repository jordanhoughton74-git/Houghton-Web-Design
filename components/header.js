import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  LightBulbIcon,
  PresentationChartBarIcon,
  UserIcon,
  ChatIcon
} from '@heroicons/react/outline'
import Link from 'next/link'

const solutions = [
  { 
    name: 'SEO & UI', 
    href: '/seo-kent',
    icon: PresentationChartBarIcon,
  },
  {
    name: 'Web Design',
    href: '/web-design',
    icon: LightBulbIcon,
  },
  // {
  //   name: 'Pricing',
  //   href: '/pricing',
  //   icon: UserIcon,
  // },
  {
    name: 'Contact Us',
    href: '/contact-us',
    icon: ChatIcon
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="relative bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6  md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/"><a>
              <span className="sr-only">Workflow</span>
              <img
                alt="Freelance Web Design HWD Logo"
                src="/images/HoughtonLogo.svg"
                className="w-auto h-6"
                width="1658.418" 
                height="253.447"
             /></a></Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
          <Link href="/"><a className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
              Home
            </a></Link>  
            <Link href="/seo-kent"><a className="text-base font-medium dark:text-white text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              SEO & UI
            </a></Link>
            <Link href="/web-design"><a className="text-base font-medium dark:text-white text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              Web Design
            </a></Link>
            {/* <Link href="/pricing"><a className="text-base font-medium dark:text-white text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              Pricing
            </a></Link> */}
            <Link href="/portfolio"><a className="text-base font-medium dark:text-white text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              Portfolio
            </a></Link><Link href="/blog"><a className="text-base font-medium dark:text-white text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              Blog
            </a></Link>
            <Link href="/contact-us"><a className="text-base font-medium dark:text-white text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
              Contact
            </a></Link>

         
          </Popover.Group>
        
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-900 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                <img
                alt="Freelance Web Design HWD Logo"
                src="/images/HoughtonLogo.svg"
                className="w-auto h-6"
                width="1658.418" 
                height="253.447"
             />                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                <Popover.Button className="text-left" onClick={() => (open = false)}>  
                <Link 
                    href="/">
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <HomeIcon className="flex-shrink-0 h-6 w-6 text-indigo-700" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">Home</span>
                    </a></Link>
                    </Popover.Button>

                  {solutions.map((item) => (
                 <Popover.Button className="text-left" key={item.name} onClick={() => (open = false)}>
                    <Link 
                    key={item.name}
                    href={item.href}>
                      <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-700" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">{item.name}</span>
                    </a></Link>
                  </Popover.Button>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <Popover.Button className="text-left" onClick={() => (open = false)}>
                <Link href="/portfolio"><a className="flex text-base font-medium text-gray-900 dark:text-white hover:text-gray-700 w-full">
                  Portfolio
                </a></Link>
                </Popover.Button>
                <Popover.Button className="text-left" onClick={() => (open = false)}>
                <Link href="/blog"><a className="text-base flex font-medium text-gray-900 dark:text-white hover:text-gray-700">
                  Blog
                </a></Link>
                </Popover.Button>
                
              </div>
              
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
