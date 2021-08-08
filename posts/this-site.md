---
title: 'Building This Site'
date: '2021-08-06'
---

I built this site as a React app using the Next.js framework. It was bootstrapped with create-next-app and makes use of several handy npm modules, including Remark for rendering markdown files into the html you're currently reading! You can take a closer look at the source code on my Github.

Using Next made the layout and routing super simple. Each page is a React component exported from a file in the /pages directory of the app. Next's structure encourages modularity, which in turn promotes maintainability and readability over the long term. Perhaps most exciting of all, the page you're currently reading is dynamically rendered and routed based on a markdown file in the app's /posts directory. Pretty cool!

The styling ended up being the lion's share of the work on this site. Next's css modules helped keep things clean, but I chose to do all custom CSS, which added quite a bit of legwork in trying to get things up to par. Using a solution like Bootstrap or Tailwind would likely have made life easier!

The photo of Dayton on the homepage is courtesy of Michael Bowman via Unsplash, and the social media icons are from Font-Awesome via one of those other npm modules I alluded to, React-Icons.

If you want to chat about any of the technologies I used, have any suggestions or observations regarding this site, or anything else, hit me on Twitter!