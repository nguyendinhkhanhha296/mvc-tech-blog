const {
    Post
} = require('../models');

const postData = [{
        title: "This Mac app makes it easy to create your own AI images",
        post_content: "Everyone wants to get in on the AI image generation action, but if you’ve been intimidated by the existing options out there based on Stable Diffusion.",
        user_id: 3
    },
    {
        title: "YouTube is gearing up to give Shorts creators!",
        post_content: "YouTube is gearing up to turn on stable monetization for Shorts, its short-form video product, according to a new report from The New York Times.",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 2

    },
    {
        title: "Tech Blog has been released!",
        post_content: "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This site will be built from scratch and deployed to Heroku. The app will follow MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 5
    },
    {
        title: "iOS 16 users are getting creative with the new background removal feature for photos",
        post_content: "For folks who don’t know about this feature, iOS 16 lets you “pick” any object from a photo and save it as a separate transparent image — just like a background removal tool",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;