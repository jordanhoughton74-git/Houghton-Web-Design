---
date: '1st September 2021'
title: 'Is Website Speed Affecting Your Sales?'
img: '/images/blog/Website-Speed.svg'
ogImg: '/images/blog/Website-Speed.png'
description: 'We look into the affect that Website Speed has on your page visitors user experience and delve into whether a slow site could lose sales'
imgAlt: 'Image for Website Speed'

---

Website speed has always been a major contributor to User Experience and I have always had a passion at pushing the fastest websites and technologies available to us.

As a consumer I would quickly grow tired or annoyed at websites who did not offer sites that would load in a timely manner and then consequently reload at each page click further worsening my experience, be it e-commerce or an informational services website.
This got me thinking whether other companies on a larger scale had the same thought as I did.

## **Amazon**

According to a study <ins>[Amazon](https://www.fastcompany.com/1825005/how-one-second-could-cost-amazon-16-billion-sales)</ins> carried they suggested that 1 second of load time lag would cost them $1.6 billion a year.  Of course the amount is huge because of the size of the company, but to put it into context a study that they carried out in 2006 estimated that for every 100 ms of load time lag they would lose 1% of sales. This would mean: 
        
<ul>
    <li>0.1 seconds of load time lag is a 1% loss in sales</li>
    <li>0.5 seconds of load time lag is 5% loss in sales</li>
    <li>0.7 seconds of load time lag is 7% loss in sales</li>
</ul>

From this we can see just how rapidly potential customers and visitors can be lost.

## **Google**

A similar study carried out by the search engine giant's <ins>[Google](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/)</ins> further backs these findings up.  Instead of loss of sales they use a Bounce Rate.  Bounce Rate being the percentage of visitors leaving the website instead of continuing to browse as usual. Their findings showed:

<ul>
    <li>1s - 3s the probability of bounce increases by 32%</li>
    <li>1s - 5s the probability of bounce increases by 90%</li>
    <li>1s - 6s the probability of bounce increases by 106%</li>
    <li>1s - 10s the probability of bounce increases by 123%</li>
</ul>

Again we can see how website speed can lead to a loss of visitors, quickly getting out of control for slower websites.<br>

## **Testing**

How can we test if our websites are being affected by website speed?  Lucky for us there are two quick and easy tools we can use to check on it.

<ol>
    <li>Google Lighthouse - Googles own system that allows us to test on Mobile and Desktop scenarios</li>
    <li>GTmetrix.com - a website that runs a scan on your site and displays a score and issues you could fix to help solve it</li>
</ol>

A quick test on Google Lighthouse shows my website's landing page (the page a user is most likely to load initially) is 99/100 on Mobile and 100/100 on Desktop.  Similarly, GTmetrix shows 99% performance.  One thing to consider is the results may vary slightly due to issues out of our control such as server speed at scan time and readiness of cache.
A further note is that mobile sites will always be slower than desktop sites due to google using throttling to simulate mobile phones, using mobile load speeds instead of a full powered desktop.  However, they should not vary that much and we already know that <ins>[Google](https://developers.google.com/web/updates/2018/07/search-ads-speed)</ins> relies heavily on mobile metrics when ranking sites for their search engine.
What Can We Do?
Depending on your platform you use it might be as simple as resizing images reducing the initial load needed for visitors.  However, the best solution for me is to use a modern technology that your web developer should have a great understanding of. 

This is where the Jamstack comes in or more specifically Next.JS, they allow us to pass incredibly fast websites to the user and also make it so load between pages is in certain scenarios instant.  Go ahead and try it if you click between my pages of this site the pages load instantly.  Unlike other technologies the Jamstack keeps websites to the minimum code needed to run the site, reducing security vulnerabilities and the size of the package passed to the user on initial request. 

In summary, where I do offer WordPress sites if a customer specifically requests it, I would however always suggest moving to the Jamstack, unless the use case is not applicable.  A similar site to mine I recently visited had a performance score on desktop of 64 and a mobile score of 40 while using the WordPress platform and being hosted on one of the more expensive hosting companies.

Google lighthouse gives my site a time to interactive of 0.6 seconds and we can see no load time between pages, so why would I choose anything else? 

