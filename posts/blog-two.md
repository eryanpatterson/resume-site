---
title: "PHP Can't be That Bad, Right?"
date: '2021-10-01'
---

Recently, I decided to brush up on my PHP and MySQL skills by making [a site](https://ethancarapp.ddns.net/) using, well, PHP and MySQL. We've all heard devs complain -- or complained ourselves -- about the unmitigated awfulness of PHP, despite or perhaps *because* so much of the internet is built on it. I don't intend to plumb the various possible technical, psychological, and sociological reasons that PHP gets such a bad rap, but only to share a little bit of my recent experience building with it.

#### It was...not so bad?!

That's right. Not only was I not vexed or frustrated by using PHP after having spent the recent past developing React apps in Node, it was *fun*. Different. A little funky. Like switching to the "Smoky Clav" setting from the "Grand Piano" setting on an electric keyboard. Now, now, before you brand me as some sort of programming heretic, let me explain why I think my experience was positive.

### I love you, (but not) for sentimental reasons...

#### **Reason 1:** The seamlessness of writing HTML within PHP

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


