# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Solution URL: [https://github.com/MalexLucero/malexlucero.github.io/tree/master/Portfolio/interactive-rating-component-main](https://github.com/MalexLucero/malexlucero.github.io/tree/master/Portfolio/interactive-rating-component-main)
- Live Site URL: [https://malexlucero.github.io/Portfolio/interactive-rating-component-main/index.html](https://malexlucero.github.io/Portfolio/interactive-rating-component-main/index.html)

## My process
1) Add all missing assets to HTML.
2) Identify the components, Form and Card.
3) Organize the html by grouping elements using sections, headers, articles, divs, and spans.
4) Hide the thank you card for now, and work on the CSS of the form at 375px
5) Find the max-width of the form, and use that as a breakpoint point to start on desktop view.
6) Add styles for card on desktop and check view at 1440px. Make the necessary adjustments to CSS
7) Hide Form, and repeat steps 4 to 6 on thank you card.
8) Hide thank you card and display form.
8) Add JavaScript to track rating, display rating in the thank you card, and toggle display on form and thank you card.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Custom Form Components
- Mobile-first workflow
- State Management


### What I learned

In this project, I learned how to better handle margin and padding on elements of a component. By stripping out all margin, 
and using a bottom margin per element, I was more efficient with aligning the placement of each element.

I learned two methods to transform a background’s transparency without impacting the content. The first method involves separating out your content 
in the HTML, background, and content. Use CSS to change the opacity of the background then positioning the content element absolutely over the 
background. The second method is to use an RGBA/HSLA value. The A stands for alpha. Alpha specifies the opacity of the color.

I learned how to apply custom styling for radio buttons and learned important lessons along the way. Use IDs for your radios that match the for 
attribute of your label. Your label, when clicked, will check the corresponding radio. HTML order maters. Add your radio before the label. It’ll 
make it much easier to target the checked state of the component


```css
.review-form-rating-radio {
  /* Reset Radio Appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* For iOS < 15 */
  margin: 0;
  font: inherit;
  color: var(--Light-Grey);
  background-color: var(--Light-Grey);
  border: 1px solid var(--Light-Grey);
  opacity: .2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all ease .1s;
}

.review-form-rating-radio:hover {
    background-color: var(--Orange);
    border-color: var(--Very-Dark-Blue);
    opacity: 1;
}
.review-form-rating-radio:hover + .review-form-rating-label {
    color: var(--White);
}

.review-form-rating-radio:checked  {
    background-color: var(--Medium-Grey);
    border-color: var(--Medium-Grey);
    opacity: 1;
}

.review-form-rating-radio:checked + .review-form-rating-label {
    color: var(--White);
}
}
```

### Continued development

I'd like to continue building layouts and components with new found inspiration for handling margin and padding across elements. Additionally, I'd like to learn more about and apply
state management across all projects involving JavaScript, when applicable of course!

### Useful resources

- [Pure CSS Custom Styled Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/) - This helped me get traction on styling the radio buttons

## Author

- Website - [Manuel Lucero Perez](https://www.linkedin.com/in/manuel-lucero-4a614b165/)
- Frontend Mentor - [@MalexLucero](https://www.frontendmentor.io/profile/MalexLucero)
- Twitter - [@ErrorThrowMoney](https://www.twitter.com/ErrorThrowMoney)
