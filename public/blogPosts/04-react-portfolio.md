# Rebuilding My Portfolio: From Static HTML to a Dynamic React Website

**Published on February 28, 2025**

### The Evolution of jrobertson.io

I first built my portfolio website as a simple, static HTML page. It was basic but functional. Having just graduated from my bootcamp, I immediately started applying for jobs. I needed something up quickly that would show off my skills and projects. However, as I continued to grow in my learning journey, I knew my portfolio should reflect my evolving skills. I wanted a site that was dynamic, yet easy to maintain and scale.

### Why React?

React’s architecture and ability to efficiently update the UI made it the perfect choice for my portfolio overhaul. Instead of manually updating static HTML pages, I could leverage structured data, reusable components, and third-party libraries to enhance functionality.

### Features and New Tech

Here’s a breakdown of the new tech I integrated into my portfolio:

##### Deployed on Vercel with a Custom Domain

Deploying on [Vercel](https://vercel.com) offers seamless integration with GitHub, automatic deployments, and built-in support for custom domains. Now, every push to my repository triggers an update to my live site at [jrobertson.io](https://www.jrobertson.io/), making deployment effortless.

##### Contact Form with EmailJS

Previously, my contact form was a simple HTML form without real functionality. To improve user experience, I integrated [EmailJS](https://www.emailjs.com/), a Node package that allows me to send emails directly from the frontend. This was my first time using EmailJS, and I was happy by how easy it was to set up.

##### Markdown-Based Blogs

I wanted a simple way to write and manage blog posts without manually updating React components or handling a database. Using [react-markdown](https://www.npmjs.com/package/react-markdown), I can write my posts in Markdown format while React dynamically renders them into the HTML. This makes blogging on my site much more convenient and scalable.

##### Content Management System

To streamline content updates, I moved away from hardcoded project details and blog lists. Instead, I structured my data in a CMS-style format (JSON) where I can easily add new content without modifying the React components themselves. This makes maintenance much quicker and smoother.

### Lessons Learned

1. **Component-Based Thinking:** Breaking down the portfolio into reusable components helped me better understand React and improved my overall development skills.
2. **Deploy Early:** Pushing my site to Vercel early in development would have allowed me to test quickly. There were some modifications I needed to make, such as adding a vercel.json file, that I did not see until the project was supposed to be finished.
3. **Exploring New Node Packages:** Working with EmailJS and react-markdown introduced me to new possibilities for integrating third-party services with React.

### What’s Next?

Though the portfolio is in a great place now, I have some future plans:

- **Dark Mode Toggle:** Improve readability and cater to user preferences.
- **Animations:** Adding subtle animations to enhance user experience.
- **More Blog Content:** Sharing more about my coding journey, projects, and personal interests.

Rebuilding my portfolio was more than just an upgrade, it was a reflection of my growth as a developer. By leveraging React, structured data, and new libraries, I created a dynamic and maintainable site that I’m proud of. Check it out and let me know what you think!
