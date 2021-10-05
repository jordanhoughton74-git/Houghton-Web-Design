---

date: '2021-10-05'
title: 'Optimising CSS using Tailwind CSS'
img: '/images/blog/Tailwind.svg'
description: 'We look into how to optimise CSS, what Tailwind is and how it might help your project'
imgAlt: 'Tailwind css logo'

---
## **What is CSS?**

CSS or Cascading Style Sheet is one of the main mechanisms web pages use to add styling to the content.  It allows us to change fonts, spacing, colours, sizing, layout and so much more.  To learn more about CSS I suggest taking a look at <ins>[W3 School](https://www.w3schools.com/css/)</ins>.  I really enjoy using CSS and seeing just how much it can be used to edit web pages from plain text to a content rich user experience.

The issue I found with CSS was the seemingly endless classes that an individual can create and unless you are following <ins>[CSS naming conventions](https://www.freecodecamp.org/news/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849/)</ins> it can cause hours of trawling through the code to find issues.

## **Tailwind CSS**

I had always used normal CSS or a preprocessor such as <ins>[Sass](https://sass-lang.com/)</ins> paired with a framework like Twitter’s <ins>[Bootstrap](https://getbootstrap.com/)</ins> or Google’s <ins>[Material-UI](https://material-ui.com/)</ins>.  While they are more than viable solutions, I found that the pre-styling on the components left me fighting against stock styles with my own CSS.

This is why I decided to give <ins>[Tailwind CSS](https://tailwindcss.com/)</ins> a try, it meant that I would lose the pre-made utilities but unlock fast-to-use styling.  I could create my own components and not have the hassle of reversing the pre-coded styling.  

The main advantage to me is reduction of the use of a separate css file, Tailwind means that for a card element I can write simply write:
<pre class="code"><code>
&lt<span class="element">div</span> <span class="vs-class">className</span>=<span class="string">”m-5 p-10 bg-gray-700 rounded text-white shadow-md”</span>&gt
    &lt<span class="element">p</span>&gtHello World&lt/<span class="element">p</span>&gt
&lt/<span class="element">div</span>&gt

</code></pre>
Which would output a styled card div with spacing from other elements, a dark gray background with contrasting white text and box shadow to make it have a 3d appearance. A similar div would require the code below:
<pre class="code"><code>
<span class="comment">//HTML</span>
&lt<span class="element">div</span> <span class="vs-class">className</span>=<span class="string">”card”</span>&gt
    &lt<span class="element">p</span>&gtHello World&lt/<span class="element">p</span>&gt
&lt/<span class="element">div</span>&gt

<span class="comment">//CSS</span>
<span class="vs-class-gold">.card</span> {
    <span class="vs-class">margin:</span> <span class="number-vs">1.25rem;</span>
    <span class="vs-class">padding:</span> <span class="number-vs">2.5rem;</span>
    <span class="vs-class">background-color:</span> <span class="string">#565656;</span>
    <span class="vs-class">text-color:</span> <span class="string">#ffffff;</span>
    <span class="vs-class">border-radius:</span> <span class="number-vs">0.25rem;</span>
    <span class="vs-class">box-shadow:</span> <span class="number-vs">4px 2px 17px 10px rgb;</span>
}

</code></pre>
From the above example you can see just how much time using tailwind could save you as well as forcing the user into a reusable naming convention.
This is just scratching the surface of the power of Tailwind. It has a load of features that I utilise regularly such as Dark Mode, Variables, Animations and Tailwind also has a large active helpful community.  

## **PurgeCSS**

You might be thinking that all this customisation must come at the cost of file size, however they have paired up with PurgeCSS to remove this issue.  At a very basic level it looks at all the classes you are using and removes the rest from the imported style sheets, meaning you only ship the used classes.  All this is done very simply in Next.js by running ‘npm i postcss’ and creating a postcss.config.js file with:
<pre class="code"><code>
<span class="comment">module</span>.<span class="comment">exports</span> = {
    <span class="vs-class">Plugins:</span> {
        <span class="vs-class">tailwindcss:</span> {},
        <span class="vs-class">autoprefixer:</span> {},
    },
}

</code></pre>
That is all that is needed and it takes care of the rest.  Since converting to tailwind I haven’t looked back and will soon be looking at updating Houghton Web Design to use the framework.
