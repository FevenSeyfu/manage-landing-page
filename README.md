# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). which is a single page responsive landing page.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Manage landing page screenshot](https://github.com/FevenSeyfu/manage-landing-page/blob/main/manage-landing-page-screenshot.png)

### Links

- Solution URL: [managing landing page Repository](https://github.com/FevenSeyfu/manage-landing-page)
- Live Site URL: [Live site URL](https://manage-landing-page-feven.netlify.app/)

## My process

### Built with

- Tailwind CSS
- React.js
- Vite
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles
- [Vite](https://vitejs.dev/) - Build Tool

### What I learned

While building this project I have learned to enforce the mobile first approach to build a responsive site,How to align svg illustration and I have built a custom carousel slider with Tailiwind and React.

## Code I am Proud of
Below is snapshot of the code I implmented the Carousal slider for the testimonials,
```js
<div className="flex flex-col items-center mt-8">
  <div className="flex ">
    // Carousal Card section
  </div>
  // below section of code is the button I have written  to handle slider and select the specific testimonial card to show
  <div className="flex my-2">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-2 h-2 mx-1 border rounded-full border-primary-bright-red ${
          index === currentSlide ? "bg-primary-bright-red" : "opacity-50"
        } focus:outline-none`}
      ></button>
    ))}
  </div>
</div>
```

### Continued development

In the future I want to refactor and find a better way of implementing the illustraters and I would like to refine and use the skills I have practiced by building the carousel slides for future projects.

### Useful resources

- [tailwind documentations](https://tailwindcss.com/) - I have refered to the tailwindCSS documentation for some features such as handling SVG fills and adding and proper position of  backgound illustrations.

## Author

- Website - [Feven Seyfu](https://fevenseyfu.tech/)
- Frontend Mentor - [@FevenSeyfu](https://www.frontendmentor.io/profile/FevenSeyfu)
- Twitter - [@FevenSeyfu](https://www.twitter.com/FevenSeyfu)
- Linkedin - [Feven Seyfu](https://www.linkedin.com/in/fevenseyfu/)


## Acknowledgments

I would like to thank all who have reviewed my solution and given me feedback.

## License

This project is licensed under the [MIT License](LICENSE).
