import Link from 'next/link'

export default function Footer() {
    return (
        <div className="bg-gray-800 py-10 px-2 lg:px-4">
            <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-4 text-white gap-5 mx-auto">
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
                <ul>
                    <li className="uppercase mb-2">Useful Links</li>
                    <li className='mb-2 hover:underline'><Link href="/"><a>Home</a></Link></li>
                    <li className='mb-2 hover:underline'><Link href="/web-design"><a>Web Design</a></Link></li>
                    <li className='mb-2 hover:underline'><Link href="/seo-kent"><a>SEO</a></Link></li>
                </ul>
                </nav>
                <nav className="text-center lg:text-left mx-auto">
                <ul>
                    <li className="uppercase mb-2">Legal</li>
                    <li className='mb-2 hover:underline'><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                    <li className='mb-2 hover:underline'><Link href="/terms-conditions"><a>Terms & Conditions</a></Link></li>
                </ul>
                </nav>
                <ul className="text-center lg:text-left mx-auto">
                    <li className="uppercase mb-2">Contact</li>
                    <li className='mb-2 hover:underline'><a href="tel:07999443163">07999443163</a></li>
                    <li className='mb-2 hover:underline'><a href="mailto:info@houghtonwebdesign.co.uk" className='break-all'>info@houghtonwebdesign.co.uk</a></li>
                    <li className='mb-2 hover:underline'><a href="https://www.facebook.com/HoughtonWebDesign">@HoughtonWebDesign</a></li>
                </ul>
                <p className='lg:text-left text-white max-w-7xl mx-auto'>Houghton Web Design © {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}