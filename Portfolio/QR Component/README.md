# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot

![](./images/QR Code Component.jpg)

### Links

- Solution URL: [https://malexlucero.github.io/Portfolio/QR%20Component/index.html]
- Live Site URL: [


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- CSS Calculations


### What I learned

For this project, I used custom properties to store HSL color values.
I accessed the values using the Var() keyword.Seeing –Light-gray instead of hsl(212, 45%, 89%) improved the code’s readability.
```CSS
:root {
    --White: hsl(0, 0%, 100%);
    --Light-gray: hsl(212, 45%, 89%);
    --Grayish-blue: hsl(220, 15%, 55%);
    --Dark-blue: hsl(218, 44%, 22%);
}

body {
    font-family: Outfit;
    background-color: var(--Light-gray);
    box-sizing: border-box;
}
```

I also learned that CSS performs calculations. In this exercise I ran into a challenge with placing the attribution at the bottom 
of the page without extending the length of the page after centering the container element vertically and horizontally on the page 
using flexbox and a 100% view height combo. Instead of using JavaScript, I used CSS to calculate the difference between the height 
of 100% of the view height and the attribution element.

```CSS
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 35px);
}
```

### Continued development
I’ll use CSS Custom Properties more often. They make code easier to read, they’re reusable, and can make code easier to maintain. 
Additionally, I think it would be great to offer users the ability to change color schemes on a web page. 
I’d like to explore the CSS’s calc() feature as well.

### Useful resources

- https://developer.mozilla.org/en-US/docs/Web/CSS/--* - Great resource for syntax and examples.
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/ - My favorite guide on flexbox. Whenever I forget a flexbox property, I turn to this.

## Author

- Website - https://github.com/MalexLucero/malexlucero.github.io
- Frontend Mentor - [@MalexLucero] (https://www.frontendmentor.io/profile/MalexLucero)
- Twitter - [@yourusername](https://www.twitter.com/ErrorThrowMoney)
