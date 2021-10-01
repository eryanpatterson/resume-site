---
title: "PHP Can't be That Bad, Right?"
date: '2021-10-01'
---

Recently, I decided to brush up on my PHP and MySQL skills by making [a site](https://ethancarapp.ddns.net/) using, well, PHP and MySQL. We've all heard devs complain -- or complained ourselves -- about the unmitigated awfulness of PHP, despite or perhaps *because* so much of the internet is built on it. I don't intend to plumb the various possible technical, psychological, and sociological reasons that PHP gets such a bad rap, but only to share a little bit of my recent experience building with it.

#### It was...not so bad?!

That's right. Not only was I not vexed or frustrated by using PHP after having spent the recent past developing React apps in Node, it was *fun*. Different. A little funky. Like switching to the "Smoky Clav" setting from the "Grand Piano" setting on an electric keyboard. Now, now, before you brand me as some sort of programming heretic, let me explain why I think my experience was positive.

### I love you, (but not) for sentimental reasons...

#### *Reason 1:* The seamlessness of writing HTML within PHP

This won't do anything to reduce my branding as a heretic, but I really appreciate the seamlessness and flexibility of writing HTML code in a PHP file. Working with JSX in React apps is great too, but there's still a more functional disconnect between logic and markup (more on that later). Being able to call *foreach* on an array, close the php tag, and then write whatever HTML I want before endling the loop inside another php tag just hits different...

Consider an array that has some names: \['Kris', 'Billie', 'Ben', 'John', 'Nathaniel', 'Ariana']

Say I want to render "Hi, \[name]!" for each name in the array. In React, I might use...

```javascript
export default function myComponent() {
    const names = [...];

    const greetings = names.map(name => "Hi, " + name + "! ");

    return (
        <>
            <p>{greetings}</p>
        </>
    )
}
```

...which is perfectly lovely. It's verbose, but not overly wordy. It's easy to read and understand. It works. By contrast, in PHP I could write:

```php
<p>
<?php 
    $names = [...];
    foreach ($names as $name): echo "Hi, $name! ";
    endforeach ?>
</p>
```

Is it a little bit funky? Sure. Do I feel strange putting logical code inside paragraph tags? Absolutely. But it's efficient. It just feels like I don't have to try as hard to accomplish what I need to accomplish. This effect is even more obvious with large chunks of code, like code that generated multiple nested html elements based on a for loop or array method. PHP lets me stay in "markup mode" rather than abstracting logic away and then forcing me to remarry logic and code later on, as JSX does.

#### *Reason 2:* The website I built was fairly simple

The are the particulars of a given language/library/framework, and then there is the situation and needs of a project. The demands I placed on my code while making the site in question were, quite simply, not very high. Don't get me wrong -- I had a lot of fun making sure that I didn't have to write out a bunch of redundant code, and the site scales near-effortlessly based on what's in the database. Probably 90% of the visual content on the site is built dynamically* based on what the server gets back from the DB, using a lot of for and foreach loops.

<sup> *Note that I am NOT referring to dynamic vs static rendering. </sup>

Nonetheless, the site doesn't have to handle user authentication, or user input of any kind, for that matter, and navigation is based on simple links. There is logic, but other than making database calls, all the logic is directly related to the markup and rendering elements on the page. Hence why the above mentioned seamlessness feels like a boon, and not a hindrance. I suspect that in a more complicated application the *lack* of separation of concerns would very quickly become frustrating. Which brings me to...

#### *Reason 3:* PHP lends itself to modularity...sort of

For someone who develops a lot in React, using <?php include('my-dir/other-code/code.php') ?> to drop in reusable code from another file feels familiar. What doesn't is the fact that there's no difference whatsoever in putting that include() in vs typing out the code in question in its entirety. What do you mean, I can begin or end a file in the middle of an HTML <head> section? What is this madness?! Where React is designed to be modular; PHP is just agnostic as to where, and how much, you chop it up. This means you can avoid a lot of redundancy and unneccessary typing in a fairly simple PHP app that doesn't even use a framework. Once again, PHP allows the dev do whatever they please. It's a good feeling.

But not so fast. Is this true modularity? The components of a React app are largely self-contained an self-consistent. Not so with PHP. This means PHP has a lower bar for the dev to clear in just getting something to work. Unfortunately, the road, er...the API that connects to hell, if you will, is full of code that "just works." Extensibility, maintainability, and just plain old **readability** matter immensely. A supposedly modular PHP application of any size is very likely a few commits away from becoming a jigsaw puzzle. A component of a modular app shouldn't just keep you from rewriting code. It should give others a sense of where and how it should fit, without having to do too much digging.

### Our Love* is Here to Stay
<sup>*or at least tolerance for each other</sup>

So, yes, I enjoyed building a site with PHP. At the end of the day, some of the language's greatest strengths are its greatest weaknesses: it blurs the lines between markup and logic, is easy to get working, and can be broken down into constituent parts with very little fuss. While it's true that craftspeople and not their tools should be blamed for shoddy work, there's something to be said for tools that push their users toward developing good habits. React, and other technologies in the JavaScript realm, tend to do this quite well. PHP does not. For that reason, devs will continue to complain about it...and because it is so powerful, simple, and ubiquitous, PHP will still be around for them to do so.



