import React from "react";
import Link from 'next/link';


function Footer(){
  return(
    <div className="footer-custom">
      <p> Houghton Web Design  © {new Date().getFullYear()}</p>
      <p> <span className="footer-text">Email:</span>info@houghtonwebdesign.co.uk<br className="mobile-break"/> <span className="footer-text">Tel:</span> 07999443163</p>
    <div>
    <Link href="/"><a className="footerlink white-text content-desktop">Home</a></Link>
    <Link href="/seo-kent"><a className="footerlink white-text content-desktop">SEO</a></Link>
    <Link href="/bespoke-web-designs"><a className="footerlink white-text content-desktop">Bespoke Service</a></Link>
    <Link href="/web-design"><a className="footerlink white-text content-desktop">Web Design</a></Link>
    <Link href="/portfolio"><a className="footerlink white-text content-desktop">Portfolio</a></Link>
    <Link href="/privacy-policy"><a className="footerlink white-text">Privacy Policy </a></Link>
    <Link href="/terms-conditions"><a className="footerlink white-text"> Terms & Conditions</a></Link>

    </div>


    </div>
)}

export default Footer;
