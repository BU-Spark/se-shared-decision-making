# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![GNU General Public License v3.0][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="Partner To Decide">
    <img src="../components/Navbar/logoNav.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Partner To Decide (a.k.a. My Shared Decision)</h3>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[My Shared Decision](https://se-shared-decision-making.web.app/)

Countless pregnant people in America face many uncertainties when it comes to delivering a baby. Over the course of roughly nine months, these pregnant people may endure countless complications that they may not have been prepared to face.

Due to the lack of transparency as well as layman terms within the medical field, many people often rush to take any advice given to them by their doctors. As a result, some individuals undergo treatment that they may not have necessarily needed.

**Our Solution:**
We seek to deliver medical knowledge and the autonomy for people to make the right decision during their prenatal care through a resource website that offers catered information based on birthing preferences.

Look at our Final Presentation to see our progress overview from Fall 2022: [Final Presentation](https://docs.google.com/presentation/d/1Tvq0CgWZD8m1km0oxnt9vPl-MfnFxGIpK7RHBG7ZnTE/edit?usp=sharing)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Our Technical Stack

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [NpmJS](https://www.npmjs.com/)
- [Typescript](https://www.typescriptlang.org)
- [MUI](https://mui.com/)
- [Firebase](https://firebase.google.com/)
- [Strapi](https://strapi.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Please review the following sections to understand how to run this project on your local device. To run properly please make sure you have the most updated version of **ReactJS, NodeJS, NPM, and Firebase.**

### Frontend

## Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

## Installation (TO RUN THE FRONTEND)

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/BU-Spark/se-shared-decision-making.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter the frontend folder in the directory

```sh
 cd frontend
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Here is what the final website should look like: [Figma Wireframe](https://www.figma.com/proto/c5bBNfzCRal0xi7EWuEK4s/Partner-to-Decide_Final-Handoff-File?node-id=5453%3A18754)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Development Roadmap

- [x] User Notes App
- [x] My Values Preferences Quiz
- [x] Questions Checklist
- [x] Connected to Strapi
- [x] Completed (minus responsiveness), Home and My Values Page
- [x] Create Notes App
- [ ] Fix Quiz array bug (array doesn't reset when page refreshed, repeats values)
- [ ] Fix Hosting bug, can only use home page url, if typed in with directory to other pages in browser, site returns a 404 error (however once on main page, site pages are accessible)
- [ ] Please see Jira for additonal tasks to be completed, please check-in with client to verify these backlog items: [Jira Page](https://sparkjedi.atlassian.net/jira/software/projects/DS519BU/boards/1/backlog?selectedIssue=DS519BU-28)

See the [open issues](https://github.com/BU-Spark/se-shared-decision-making/issues) to add recommended features, and to log future issues (Quiz and 404 error included).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

For future contributions of this project, please first ensure that initial-frontend is merged to main properly before creating new branches.

1. Create your Feature Branch (`git checkout -b INSERT commit-name`)
2. Commit your Changes (`git commit -m 'Insert your commit message, make sure it's detailed'`)
3. Push to the Branch (`git push origin commit-name`)
4. Open a Merge Request for Main

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GPL-3.0 license. See [License](https://github.com/BU-Spark/se-shared-decision-making/blob/main/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Here are some helpful resources to kick off the project!

- [Open Source Features Site](https://codesandbox.io/)
- [How to Deploy to Firebase](https://hackernoon.com/how-to-deploy-a-react-application-with-firebase-hosting-p92m37b7)
- [What is Local Storage](https://www.tutorialspoint.com/localstorage-in-reactjs)
- [Strapi Documentation](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)
- [Partner to Decide Main Site](https://www.partnertodecide.org/)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [Jira Board (Includes any bugs remaining)](https://sparkjedi.atlassian.net/jira/software/projects/DS519BU/boards/1/backlog?selectedIssue=DS519BU-28)
- [Intro to Typescript](https://www.w3schools.com/typescript/index.php)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[deploy-site]: https://se-shared-decision-making.web.app/
