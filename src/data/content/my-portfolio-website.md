---
title: "My Portfolio Website"
image: "/assets/img/mockup3.webp"
alt: "A mockup of an iPhone 16 Pro showcasing the Hotspot app"
description: "Dive deeper into the history and thought process behind my portfolio website."
category: "Project"
date: "2025"
---
# Summary
I built this portfolio website using **Next.js**, **TypeScript** and **SCSS**. From meticulous planning and design using Figma to development in VScode. I built my own custom headless CMS using a combination of serverside scripts, **gray-matter** for metadeta, and **react-markdown** for markdown support. Thanks to Next.js **SSR** features, my portfolio is optimized for speed and SEO.

# Purpose
The idea initially started back in 2018 when I was in highschool. I wanted to have a platform where I can showcase my work, and share my opinions and insights.

# Design Process
> **Tools used:** Figma, Pixelmator Pro

I started with initial sketches and prototypes of my vision. How I wanted the website to look like, and the purpose of creating such website. The process was very exciting and I would continue sketching ideas and develop local prototypes.

## Portfolio v1
![Prototype design of the 1st iteration of my portfolio website](/assets/blog/images/blog-portfolio-v1.png)
Portfolio v1 overview page.

This was one of the earliest design prototypes I made. It was heavily inspired by [Tobias Ahlin's website](https://tobiasahlin.com/). Minimal, with grid-like layout which was a big trend at the time.

## Portfolio v2
![Prototype design of the 2nd iteration of my portfolio website](/assets/blog/images/blog-portfolio-v2.png)
Portfolio v2 homepage.

This version was shortlived, as I had more exciting ideas on the horizon. I ditched the hamburger menu for a more practical design, with visible links, and social connections.

![Mockups of the 2nd iteration of my portfolio website](/assets/blog/images/blog-portfolio-v2-2.png)
Experimenting with font pairings and colors.

I experiminted different font pairings, colors and shapes. Creating a brand identity.

## Portfolio v3
![Prototype design of the 3rd iteration of my portfolio website](/assets/blog/images/blog-portfolio-v3-header.png)
Portfolio v3 homepage.

Tying it back to the original and iconic sketch designs, but with more practical design; I was starting to get somewhere. However, the design seemed too gimmicky and trendy to me. I wanted something more timeless, something that reflects my personality more.

![Mockups of the 3nd iteration of my portfolio website transitioning from trendy to practical](/assets/blog/images/blog-portfolio-v3-transition.png)
Bold and energetic ⇒ Calm and soothing.

Transitioning to an even more practical design; I liked the direction this was heading. And I loved the timeless warm tones. Images seemed to blend in, the design felt more breathable. However, the font choice didn't match my brand, and the design still seemed somewhat trendy. I wanted a more timeless design.

## Portfolio v4
![Prototype design of the 4th iteration of my portfolio website](/assets/blog/images/blog-portfolio-v4-homepage.png)
Portfolio v4 homepage.

The 4th iteration of my website is where I aimed to do things differently. I took time to do thorough planning, user research, UX considerations based on emotions and message I wanted to convey. 

### Moodboard
I took inspiration from older projects, and also websites that inspire me.

![Moodboard with screenshots of website inspirations, color palettes, fonts and logo mockups](/assets/blog/images/blog-portfolio-v4-moodboard.png)
Moodboard for Portfolio-v4.

# Development
> **Tools used:** VS Code, iTerm2, Github, Postman, Vercel

## Teck Stack
- **Frontend:** Next.js, SCSS, Framer Motion
- **Backend:** Next.js, Headless CMS (gray-matter + react-markdown)

## Challenges

### 1. Managing SSR with client components
Using Framer Motion hasn't been smooth, as it goes against Next.js' SSR nature. I cannot run Framer Motion without forcing the elements to be rendered on the client, which hurts performance and SEO, unless done thoughtfully – and by that I mean you have to be very selective with what parts of a component you want to animate, rather than say, an entire component or page. 

I've resorted to standard `@keyframes` animations for now until I find a solution that computes locally but doesn't require the component to run on client.

### 2. Custom Markdown rendering for consistent design
I've defined my own custom styles for handling markdown content. It's great, it's fast, but it has its limitations. I'm looking to expand its functionality in the future, such as having **split-column** views instead of using tables.

### 3. Preventing blurry images
This one was confusing to get the hang of at first, but wow it's a game-changer! Next.js handles images differently than what I'm used to before, but wow the performance gains and data savings are real.

# Features

## 1. Fully custom design system
The design system is fully custom, down to the pixel. Sass defined variables and mixins, consistent theme applied for the whole website.

## 2. Headless Markdown CMS
I'm proud of making my own markdown CMS, it's very convenient, I can simply write, and the styling/layout is taken care of by the code.

## 3. Dynamic routing and tagging system (WIP)
This is still **work in progress**. I have been experimenting with dynamic routes in Next.js for my projects page for better indexing and SEO, developing my own tagging system for filtering.

## 4. Responsive & Accessible layout
The UI/UX is designed to meet **WCAG 2.0** accessibility standards, and is responsive across all screen sizes.

# Future Vision

This website is still a work in progress and I have many exciting ideas for it in the near future. There's still a lot to learn and a lot of great tools out there nowadays. For example, I might consider switching to a design system for even more consistency in my designs. I'm keeping an eye on **shadcn/ui** and **Tailwind CSS**. There was even an idea to use **Notion** as a backend database for my posts (easily accessible, version history, edit anywhere), plus it's written in markdown! Until then, I'll continue to pursue my passion for web dev, and improve my skills to deliver better user experiences.