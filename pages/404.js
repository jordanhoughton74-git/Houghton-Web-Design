import Link from 'next/link'

export default function FourZeroFour() {
    return(
        <div className="min-h-screen grid">
            <div className="my-auto">
            <h1 className="text-indigo-700 text-7xl font-extrabold">404</h1>
            <p className='mb-4'>Page not found</p>
            <Link href="/"><a><button className="bg-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Home
            </button></a></Link>
                    <Link href="/web-design"><a><button className="bg-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-3 rounded">
                Web Design
            </button></a></Link>
 
            </div>
        </div>
    )
}