import Link from 'next/link'

export default function Footer() {
    return (
        <div className="bg-gray-800 py-10 px-4 lg:px-20">
            <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-4 text-white gap-5">
                <div className="my-auto mx-auto">
                <img
                alt="Freelance Web Design HWD Logo"
                src="/images/HoughtonLogoWhite.svg"
                className="w-auto h-10"
                width="1658.418" 
                height="253.447"
             />  
                </div>
                <nav className="text-center lg:text-left mx-auto">
                    <p className="uppercase mb-2">Useful Links</p>
                    <Link href="/"><a><p className="mb-2">Home</p></a></Link>
                    <Link href="/web-design"><a><p className="mb-2">Web Design</p></a></Link>
                    <Link href="/seo-kent"><a><p className="mb-2">SEO</p></a></Link>
                </nav>
                <nav className="text-center lg:text-left mx-auto">
                    <p className="uppercase mb-2">Legal</p>
                    <Link href="/privacy-policy"><a><p className="mb-2">Privacy Policy</p></a></Link>
                    <Link href="/terms-conditions"><a><p className="mb-2">Terms & Conditions</p></a></Link>
                </nav>
                <div className="text-center lg:text-left mx-auto">
                    <p className="uppercase mb-2">Contact</p>
                    <p className='mb-2'>07999443163</p>
                    <p className='mb-2'>info@houghtonwebdesign.co.uk</p>
                </div>
            </div>
            <p className='lg:text-left text-white lg:pl-7'>Houghton Web Design © {new Date().getFullYear()}</p>
        </div>
    )
}