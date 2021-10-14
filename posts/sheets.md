---
title: "Googe API Integration in React"
date: '2021-10-13'
---

One of the first fully-fledged React apps I built was [this quote generator](https://ethan-react-quote-generator.herokuapp.com/). I built it on Codepen initially, before migrating it to a local development environment using Node.js and deploying via Heroku. It's built with three traditional React class components, as I had just learned the basics and hadn't yet discovered the wonders of React functional components and hooks. It was also rather hamfisted, if effective, in how it stored the quotes it served to the user; they were hardcoded as an array at the top of the file containing the three components.

For a long time I'd thought it would make sense to integrate the Google Sheets API into the app and simply store the quotes in a Google Sheet. Today I decided to finally make the switch. Here's what I learned.

### Google Cloud Platform Authorization

For all their ease of use, Google's manifold APIs are not quite plug and play. One must first make a [Google Cloud Platform](https://console.cloud.google.com) account (integrated with your existing Google account, of course) and enable the API(s) in question, the Google Sheets API in my case. Simple enough.

Here's where things get more complicated. Before changing a line of code in my application, I wanted to make sure my ducks were in a row in terms of my API endpoint itself, so I opened up Postman, put in the url for the endpoint, (https://sheets.googleapis.com/v4/spreadsheets/spreadsheetid/values/Sheet1!A1:B4), and hit send on my GET request...

...and promptly got back a 403 status code

Apparently it was an authorization issue, alright, makes sense, no problem, right? So I go to Google, not to the Documentation for the API I was using, nosiree, to the search engine, where I type in something like "Google API Postman auth". Big mistake. Big. 

Huge.

#### On Reading the Documentation

I spent the next hour going back and forth in Cloud Platform's dev console, bouncing between questions on StackOverflow, straining to hear the poorly-recorded, disembodied voice on another YouTube video. What did I learn from all this searching? Google offers a massive range of tools that are used by a massive number of people. As such, there is no shortage whatsoever of people ready to attempt to walk you through using Google's APIs. Some of them will be helpful. Many will not be, and their "step-by-step tutorial" or screen-captured walkthrough will only muddy the waters for you. 

I don't mean to cast aspersions on people who write or record tutorials; it's amazing and beautiful that so many people are willing to help strangers figure out an issue or implement a new technology. I do mean to pose the following question: **Why do so many developers (myself included) go to the docs as a last resort?** The prospect of finding an easy, specific solution to your issue rather than having to wade through pages of documentation is understandably tantalizing, but how much time would we save in the long run if we prioritized the important -- gaining a solid understanding of the technology we're using and implementing it in the right way -- over the urgent -- solving this particular usecase right now so I can go to lunch?

It's like finding out your cousin has been shot but instead of calling the police you go straight to the true crime podcasters. Sure, they might help to solve a cold case now and then, but how many other cases are going to be bungled along the way? In fact, if you only have two minutes to spend reading about Google APIs, close this browser tab right now and read their documentation ([here's the docs for the Sheets API](https://developers.google.com/sheets/?hl=en_US)) instead. Do it now.

#### OAuth 2.0 or something else?

Consider the above sermon concluded, but part of why I got so frustrated is that every resource I came across focused exclusively on using OAuth 2.0 to do full-on user authorization. This means adding client ids and other such fancies to your request and enabling access to your Google account through a redirect (just as you do when any other app requests access to your Google account). Long story short, I followed the steps to get OAuth working with Postman and get the JSON back from my Google Sheet that I wanted. Yay! But while OAuth is a fantastic technology and should be the preferred choice for many use cases, I really just wanted to use a simple API Key, since all I want to do is retrieve non-sensitive data from a spreadsheet and serve it to my application.

That brings me to query parameters. Unlike information that is send in the Head or Body of an HTTP request, query params are appended *to the url itself*. I've worked with them previously to create dynamic routes in PHP using url slugs and $_GET, and in this case, appending '?key=myApiKey' to my url allowed me to authorize much more simply than using OAuth would (again, apples and oranges -- OAuth is well worth the extra configuration in more sensitive situations).

In order to get an API key, go to "Credentials" from the APIs and Services menu in the Cloud Platform console, click "Create Credentials" just below the page header and select "API Key." The API endpoint you call in your application should be something like 'https://sheets.googleapis.com/v4/spreadsheets/yourSpreadsheetId/values/Sheet1!A1:B4?key=yourAPIkey'.

#### Don't Make me Promises

Now to implement the API in our application. I realized while building this that Next.js (with which the website your currently on is built) has spoiled me a little bit in how it streamlines the process for making API calls. I found that the best solution for my app was to call fetch() inside componentDidMount() in my application, per the React documentation. As always when using fetch(), great attention must be paid to how the returned promises are handled, and that calls are *await*ed when necessary.

You can always choose to set a variable to the return value of the fetch statement and go from there. I chose to use .then and use setState within the body of a .then method:
    
```javascript    
async componentDidMount() {    
    await fetch(url)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                quotes: data.values
            });
        });
}
```       

That's pretty much it. Actually handling, parsing, and rendering the data you get from the API is a matter of calling state values and array indexes properly -- my application, for example, went from using

    // Array of objects:
    quotes[iterator].quote
to using

    // Array of arrays:
    quotes[iterator][0]

You can check out the full source code for the app in question [on my GitHub](https://github.com/eryanpatterson/quote-generator/). Thanks for reading!
