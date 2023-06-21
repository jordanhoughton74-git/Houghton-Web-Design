import Link from 'next/link'
import { ArrowSmRightIcon } from '@heroicons/react/outline'



export function Button (props) {
    return (
        <Link href={props.link}><a className='group button mx-auto mt-3 uppercase text-sm font-bold tracking-wide bg-indigo-700 dark:bg-violet-900 hover:bg-indigo-800 text-gray-100 p-3 rounded-lg focus:outline-none focus:shadow-outline'>
          {props.text}
          <ArrowSmRightIcon className='transition ease-in-out group-hover:translate-x-2 ml-2 h-5 w-auto inline'/>
        </a></Link>
)}