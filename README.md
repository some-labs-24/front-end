[![Maintainability](https://api.codeclimate.com/v1/badges/d676c4045899656a659d/maintainability)](https://codeclimate.com/github/some-labs-24/front-end/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d676c4045899656a659d/test_coverage)](https://codeclimate.com/github/some-labs-24/front-end/test_coverage)

# Social Media Strategy

You can find the deployed project at [Social Media Strategy](https://so-me.app/).

## Contributors

SoMe was built in Lambda School Labs - you can find the ongoing original repo here: [Lambda School Repo](https://github.com/Lambda-School-Labs/social-media-strategy-fe)

### Labs 24

|                                         [Aja Blanco](https://github.com/ajablanco)                                         |                                     [Eddie Madrigal](https://github.com/eddiemadrigal)                                      |                                           [Fabricio Bezerra](https://github.com/fbzr)                                            |                                                            [Jack S. Kim](https://github.com/jskway)                                                             |                                         [Tim Shaker](https://github.com/tmshkr)                                         |
| :------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
|                [<img src="./src/assets/imgs/aja-blanco.png" width = "200" />](https://github.com/ajablanco)                |            [<img src="./src/assets/imgs/eddie-madrigal.jpeg" width = "200" />](https://github.com/eddiemadrigal)            |                  [<img src="./src/assets/imgs/fabricio-bezerra.jpeg" width = "200" />](https://github.com/fbzr)                  | [<img src="https://avatars3.githubusercontent.com/u/47550491?s=460&u=df9ffae0c4c35af6f4abc860adaa59bce872086b&v=4" width = "200" />](https://github.com/jskway) |                [<img src="./src/assets/imgs/tim-shaker.png" width = "200" />](https://github.com/tmshkr)                |
|                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/ajablanco)                   |                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/eddiemadrigal)                  |                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/fbzr)                         |                                       [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/jskway)                                       |                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tmshkr)                   |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/ajablanco/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/edmadrigal/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/fabricio-bezerra) |                     [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jackskim/)                     | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/tmshkr/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.13.0.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

## Project Overview

[Trello Board](https://trello.com/b/ckiGAMRc/labs-24-social-media-strategy)

[Product Canvas](https://www.notion.so/Social-Media-Strategy-9d1840703db34c5cb44d0f4a0cc45543)

[UX Design files v2.0](https://www.figma.com/file/xUEu5t398Z4vRXxHNs3jX9/Draft-5?node-id=0%3A1)

Small business owners, social media managers and tech professionals aren't sure when and what content will optimize their engagement across various social media platforms

SoMe helps users streamline and optimize their social media presence.

### Key Features

- Improve users' post contents for increased engagement based on their followers' historical engagement habits/data.
- Clean and modern drag-and-drop interface
- Suggestive scheduling

## Tech Stack

### Front end built using:

React

- Supports reusable components
- Ease of deployment and maintenance

Redux

- Integrates well with React
- State management capabilities match that of application

Material-UI

- Ease of component styling

Styled Components

- Ease of component styling
- Provides easier interaction with React-Beautiful DnD

React-Beautiful-DnD

- Controls and styles drag-and-drop functionality

#### Front end deployed with `Netlify`

#### [Back end](https://github.com/some-labs-24/back-end) built using:

- Node.js
- Express.js
- Postgres

# APIs

## Okta Authentication APIs

Provided by Okta to handle account creation, user authentication and social media network authorizations.

## [SoMe Data Science API](https://api.so-me.net/docs)

A set of endpoints for our ML features, built by our [DS Team](https://github.com/some-labs-24/data-science).

<!--
## 2️⃣ Payment API here

🚫Replace text below with a description of the API

This is the way you take out your flustrations. Get away from those little Christmas tree things we used to make in school. Isn't it fantastic that you can change your mind and create all these happy things? Everything's not great in life, but we can still find beauty in it.

## 3️⃣ Misc API here

🚫Replace text below with a description of the API

You can do anything your heart can imagine. In life you need colors. This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. I'm sort of a softy, I couldn't shoot Bambi except with a camera. Trees get lonely too, so we'll give him a little friend. We'll lay all these little funky little things in there.-->

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_API_URL - URL to back end server
    *  REACT_APP_OKTA_DOMAIN - SoMe account Okta domain (available on Okta
    dashboard)
    *  REACT_APP_CLIENT_ID - SoMe client ID (available on Okta dashboard)

<!-- # 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| doodles.png    | Nicole Bennett   | [Creative Commons](https://www.toptal.com/designers/subtlepatterns/doodles/) |
| rings.svg      | Sam Herbert      | [MIT](https://github.com/SamHerbert/SVG-Loaders)                             | --> 

# Testing

Unit Testing conducted with React Testing Library

# Installation Instructions

- Fork and Clone Repository
- Run NPM install to download dependencies

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created
    * test - runs tests in **tests** directory \* eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/social-media-strategy-be/blob/master/README.md) for details on the backend of our project.
