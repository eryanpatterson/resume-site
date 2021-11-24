---
title: "Getting Started with the MERN Stack"
date: '2021-11-23'
---

In this day of static site generators and jamstack-style deployment through content-delivery networks, a "stack" in the traditional sense is not as much of a given as it once was. Old standbys like the LAMP stack (an Apache server serving a PHP back-end with a MySQL database and all running on a Linux machine) or .NET feel far removed from the bright-and-shiny world of Gatsby, Next.js, and others. 

MERN is a traditional stack that still shares a lot with the fancy tools at the cutting edge of web development. A MERN stack is a Node.js back-end using Express.js, a Node web application framework, with a MongoDB database and all connected to a React front end. 

### Mern, in other words, is for people who *really* like JavaScript.

<br>

With MERN, you code JSX for your markup. Your database uses documents (virtually indistinguishable from JSON objects) rather than the table/column/row structure of SQL databases. And your back-end code is written in JavaScript as well, rather than PHP or another common back-end language, thanks to Node.

This ability to make all elements of your website/app linguistically consistent is helpful, especially when a given dev is working on both front and back-end code. Any time one has to shift one's mindset or frame of thinking, there is a potential for errors and a chance for distraction to creep in.

## My first MERN App

I recently built my first app using the MERN stack: [secretsantafier.com](https://secretsantafier.com). It is hosted on an Ubuntu machine via Digital Ocean and uses Nginx as a reverse proxy (LMERNN stack?). I also set up a mail server using Postfix in order to send emails.

When I started building this app, I had spent a fair amount of time developing a couple of Next.js sites, despite having learned React itself only months before. Up to that point, the only vanilla React app I had built was this [quote generator](https://ethan-react-quote-generator.herokuapp.com/), which sends requests to the Google Sheets API directly from the front-end. As such, I was a little unsure of my skills developing React. What if Next was holding my hand too much, making things too easy?

Partly to assuage those fears, and partly because I wanted my Secret Santafier to be a traditional SPA, I decided to make it a MERN app. It has three basic components and uses [React-Router](https://github.com/remix-run/react-router) to navigate them. It's styled with Tailwind CSS.

On the back end, there are a few endpoints that accept post requests at /api, as well as an endpoint that serves my post-build front end. At one time, I was using Nginx to serve my build folder while trying to access my api on localhost, but serving my front-end *from* my Node application proved to be the better option. In addition to the endpoints, a few functions that serve as middlewares for validating JSON web tokens round out the main index.js server file.

In addition to the N, E, and M of Node, Express, and MongoDB, my back-end makes use of Mongoose. I initially planned on foregoing object modeling, but saw the light fairly early on. Using Mongoose for this project made all the CRUD operations on my databse easier and more robust.

### Basic Usage

For this app, I wanted a reasonable level of security without having to implement full-blown user authorization. To achieve this, I implemented single-use JSON web tokens. The use cycle begins when a user visits the base url, secretsantafier.com, and clicks "Create Group." They are then routed to the /register section, where they fill in a form to establish a group. This information gets POSTed to the /api/group-register endpoint in the back end, and saved to the database from there. Part of the back end logic signs a json web token for each group member and emails them a url with the token appended as a query string using [Nodemailer](https://nodemailer.com). The same token is saved to a database.

When each group member receives the email and clicks the confirmation link, they are directed to /group. A useEffect hook takes the value of the query parameter and POSTs it to the API. The token is checked against the database as part of the verification process, and later deleted. If the group creator elected to include mailing addresses, and the API responds with another single-use token, and group members are presented with a form to send their mailing address in. The form info is POSTed back to /api/address along with the new token, which must be verified and used to find the member's group record in order to update it with their address.

If the group creator does not elect to use addresses, only the first token is generated, and a checker function is called once they confirm their email address. In this case, the function checks the boolean value of the property "verified" for each object in group.members. If addresses are used, the checker function is called once the user submits their address instead, and the truthy-ness of the address property is evaluated by the checker function.

Once the last group member has verified/sent their address, the checker function returns true, and a mailer function is called. This shuffles the group array to assign members randomly to one another, and then emails them their result.

## Conclusions

Building this app was a fair bit of work, and a lot of fun. In particular, ironing everything out after deploying to production was a learning experience, and it strengthened my grasp of everything from SSH to API routing. Styling with Tailwind definitely made life easier, and I was impressed by Express's ease of use.
