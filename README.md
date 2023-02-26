# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

### Links

- Live Site URL: [Results summary component](https://your-live-site-url.com)

## Challenge
This is a simple project that I created to learn Tailwind CSS and how to use the Fetch API in JavaScript. Usually, I start with desktop designing, but this time I followed the mobile-first approach, which made me realize that I was doing it the wrong way.

Tailwind is a CSS framework that allows you to style your HTML elements by simply assigning them classes. For example, here we give the span element the "text-indigo-500" class, which means that it will color the text in indigo:
```
<span class="text-indigo-500"> 86 </span>
```
It's a really cool framework if you want to create beautiful websites quickly, but it's not recommended for creating a website starting from a given design. This challenge is pretty simple, but I found some hardship in getting the right values for some attributes, which could have been done faster with simple CSS (I don't know, maybe I'm just starting out in Tailwind).

Also, I used the fetch() function here to fetch a JSON file that resides locally and contains the data of the detailed results over the network, which means that it will make an HTTP call. The fetch() function will return a promise that resolves with an object that contains the entire HTTP response. and that did require us to use the json() function to extract the HTTP body or the needed data.

You can learn more about it [here](https://tailwindcss.com/docs) and [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
