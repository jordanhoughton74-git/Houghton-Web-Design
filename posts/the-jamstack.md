---
date: '3rd September 2021'
title: 'The Jamstack - what is it?'
img: '/images/blog/Nextjs.svg'
description: 'We look into what the Jamstack is, the benefits and how it might be better than a conventional website'
imgAlt: 'Image for Next.js'

---

## **The Jamstack**

When I started to learn web developing I looked into hundreds of different platforms and languages to try and find what I thought was the best use case scenario for the majority of my clients.

My initial thought was of course WordPress, this is a long tested solution for getting websites online with a reasonably client friendly Content Management System (the admin panel that you can edit text on the website).  However, for me it was always very slow and the system felt old. I also grew worried about security having to install x plugin to do this and y plugin to stop this happening, then a plugin to cache and a plugin for stripping unused css or JavaScript.  I also experienced a string of styled content losses due to bugs in full production plugins.

This is where the **Jamstack** stepped in.

## **What is the Jamstack?**

As described by <ins>[Jamstack.org](https://jamstack.org/what-is-jamstack/)</ins> the *“Jamstack is an architecture designed to make the web faster, more secure, and easier to scale”.*  What does this mean in reality?

<ul>
<li>Faster Websites - Pages can be rendered on build time saving a lot of time on delivery to the visitor and also providing a search engine friendly static generated version that it can crawl.</li>
<li>More Secure - by nature the Jamstack has less moving parts and is also less complex, only loading needed code.</li>
<li>Pre-Rendered sites - this means it is easier to scale and less computing power is needed to do so.  WordPress sites are essentially an application running on a server, building pages on request constantly needing to contact a database for information in this case MySQL.</li>
<li>Hosting - The majority of Jamstack specific hosts offer incredibly fast global CDNs out of the box.</li>
</ul>

There are a whole host of different Jamstack platforms for us to use with some of the most popular being Next.JS, Gatsby.JS, Vue.JS, 11ty, Hugo and the list goes on.<br>

## **Next.JS** 

Out of all the options above I settled on <ins>**[Next.js](https://vercel.com/)**</ins>, which really stood out to me for many reasons:

<ul>
<li>Next is a React.js framework - React is a powerful JavaScript library and I also had a lot of past knowledge from working with React so I fit right in, being able to leverage react hooks from day 1</li>
<li>Vercel - The creators of Next is a company called vercel and they have released incredibly detailed documentation and even some of the developers have videos on how to solve some complex problems</li>
<li>Community - Next was launched in 2016 and the community has grown and is incredibly helpful with many public repos to explore</li>
</ul>

As you can see for me Next.js was best fit and it just works how you expect it to work, experiencing almost no bugs and on the occasion you do find one, the community always seems to already have a work around.  Next has allowed me to produce websites of speeds I didn't think was possible.

## **CMS**

Jamstack works by decoupling the backend from the frontend which could mean we lose our CMS.  WordPress for example comes with a CMS out the box allowing clients to make changes to web pages.  But what if we could use a CMS which instead of using a database and dynamically creating web pages, we could use a Git workflow.

<ins>**[Netlify CMS](https://www.netlifycms.org/)**</ins> has made this possible, we simply edit specific files changing the text or data needed then rebuild the webpage, once again statically generating the page for fast load speed.  What’s more the CMS is created using React so we know it's going to be fast and secure.  The Netlify CMS means we don't need an over-complicated backend to run the CMS, this means most websites won’t even need a database and just to make it even sweeter the files are backed up to your chosen git provider such as GitHub or GitLab.

## **Pricing**

How much would a Jamstack website cost? This is something that really depends on your use case and the size of the website however, seeing some of the huge figures that peolpe charge for WordPress sites, I strongly believe by finding the right developer, someone with a passion for the industry and the technical know how like myself, you could still pick up a hand coded Jamstack website for much cheaper than someone offering a WordPress site.

I spoke previously about how website speed is a major factor to user experience and again I am left asking myself why I would use anything else? Why wouldn't we want to take advantage of everything the Jamstack offers?

<ul>
<li>Fast websites</li>
<li>Built in security</li>
<li>Smaller load sizes</li>
<li>Less need to update systems</li>
<li>Scalability</li>
<li>Less bugs</li>
</ul>

If you have any questions about my experiences or want advice on how to switch to Jamstack let me know.
