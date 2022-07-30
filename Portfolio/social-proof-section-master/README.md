# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the section depending on their device's screen size


### Links

- Solution URL: [https://github.com/MalexLucero/malexlucero.github.io/tree/master/Portfolio/social-proof-section-master](https://github.com/MalexLucero/malexlucero.github.io/tree/master/Portfolio/social-proof-section-master)
- Live Site URL: [https://malexlucero.github.io/Portfolio/social-proof-section-master/index.html](https://malexlucero.github.io/Portfolio/social-proof-section-master/index.html)

## My process
Reviewed the design and choose a mobile first approach with flexbox as the layout model. Flexbox was chosen to stagger the children of the main components,
and as well as to flip the axis of components at various screen sizes.

After identifying the main components, I modified the HTML with consideration to the layout model. I then moved on to the CSS for mobile. I added the styles,
and margin and padding based on a 375px view. I did the 1400px screen view next and retraced back to 375px.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to use the :nth-child() structural pseudo-to target and position elements using flexbox.

```html
<section class="reviews">
            <div class="review">
            </div>
  
            <div class="review">
            </div>
  
            <div class="review">
            </div>		
        </section>
```
```css
    .reviews {
        display: flex;
        flex-direction: column;
    }
    .review:nth-child(1){
        align-self: flex-start;
    }
    .review:nth-child(2){
        align-self: center;
    }
    .review:nth-child(3){
        align-self: flex-end;
    }
}


### Continued development
I’d like to better understand margin and padding as it pertains to child elements, so that I can better anticipate what they will look like when rendered.  
In addition, I’d like to stick to a mobile, tablet, pc workflow.

### Useful resources

- [CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Good resource for understanding flexbox
- [CSS-Tricks](https://css-tricks.com/almanac/selectors/n/nth-child/) - Good resource for understanding :nth-child()

## Author

- Website - [Manuel Lucero Perez](https://www.linkedin.com/in/manuel-lucero-4a614b165/)
- Frontend Mentor - [@MalexLucero](https://www.frontendmentor.io/profile/MalexLucero)
- Twitter - [@ErrorThrowMoney](https://www.twitter.com/ErrorThrowMoney)
