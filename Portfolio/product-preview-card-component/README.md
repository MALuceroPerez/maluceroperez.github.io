# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
1) Identified the design as a responsive card compenent
2) Identified parts of the component by adding elements and classes to the HTML
3) Render the HTML in Chrome using VSCode's Live Server extension and set the screen width to 375px.
4) Built the component top down
5) Styled the component top down
6) Added active state
7) Added media queries at 600px

### Built with

- Semantic HTML5 markup
- CSS Custom Properties
- Flexbox
- Mobile-First Workflow
- Responsive Images
- Media Queries

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned how to leverage the picture tag’s media and source attributes to swap pictures out at different screen widths. 
For me, on the Chrome browser, the picture element rendered a 3-pixel element that left a space between the image and product card content. 
As a work around, I added negative margin to the image to fill in the void.
```html
      <picture>
  
        <source   srcset="./images/image-product-mobile.jpg 686w"
                  media="(max-width: 599px)"/>
  
        <source srcset="./images/image-product-desktop.jpg 600w"
                media="(min-width: 600px)" />
  
        <img  class="productCard-image" 
              src="./images/image-product-mobile.jpg" 
              alt="A bottle of Chanel Gabrielle perfume."
              width="343px" />
  
      </picture>
```
I learned how to use flexbox for typography. The centering of the original is accomplished using the flexbox center on the flex item itself.  
On the flexbox layout side, I learned that if your element isn’t as wide or as tall as expected after using flexbox, try adjusting the flex-grow
and flex-shrink properties.

```css
.productCard-price--sale {
    font-family: "Fraunces";
    font-size: 2rem;
    color: var(--Dark-cyan);
    margin-right: 2rem;
    align-self: baseline;
}

.productCard-price--original {
    color: var(--Dark-grayish-blue);
    text-decoration: line-through;
    align-self: center;
}
```



### Continued development
Categorizing and commenting HTML and CSS documents is starting to become apparent. As projects grow larger, those files in turn will grow larger.
In the next project, I’d like to go bigger. Three keys focus areas for me will be fundamentals, speed, and organization.
 

### Useful resources

- [responsive-images-101-definitions](https://cloudfour.com/thinks/responsive-images-101-definitions/) - Helped with understanding the picture element and responsive images


## Author

- Website - https://github.com/MalexLucero/malexlucero.github.io
- Frontend Mentor - [@MalexLucero] (https://www.frontendmentor.io/profile/MalexLucero)
- Twitter - [@yourusername](https://www.twitter.com/ErrorThrowMoney)
