<a name="readme-top"></a>
<br />

<div align="left">
  <a href="Partner To Decide"> <h3 align="center">Partner To Decide (a.k.a. My Shared Decision)</h3> </a>
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

<p align="left">(<a href="#readme-top">back to top</a>)</p>

### Built With

**Our Technical Stack**
Frontend

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [NpmJS](https://www.npmjs.com/)
- [Typescript](https://www.typescriptlang.org)
- [MUI](https://mui.com/)

CMS

- [Strapi](https://strapi.io/)

Deployment

- [Firebase](https://firebase.google.com/)

<p align="left">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Please review the following sections to understand how to run this project on your local device. To run properly please make sure you have the most updated version of **ReactJS, NodeJS, NPM, and Firebase.**

For **React** you can learn more in the [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)

## Frontend

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation (TO RUN THE FRONTEND)

_How to run the current project on local device:_

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

```sh
 npm start
```

_Runs the frontend from local host Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Will update when edits are made._

**Other useful npm commands**

```sh
 npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```sh
 npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```sh
 npm run eject
```

_Note: this is a one-way operation. Once you `eject`, you can’t go back!_

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

<p align="left">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Strapi

**Brief:** Recommend to build and test content locally and deploy to google cloud after everything is set.

**To host locally:**

```sh
   cd new-strapi
   npm install
```

Create .env file and paste following:

_HOST=0.0.0.0_
_PORT=1337_
_APP_KEYS=hq5nXeyU/6AUVnkkdHmmqA==,c1W7ivCD+NMYGnpjiLOoMQ==,l2cE5Bfqejdgs//K8Aa7Ag==,ZlqpAcH2lPYYbP8QqTb2bg==_
_API_TOKEN_SALT=WSeDbXcQ7JgJ1tMKGhsIXw==_
_ADMIN_JWT_SECRET=w3fdKjGIQ4m0bJOYQxRBbA==_
_JWT_SECRET=EC1lm5cICpaxnYCl2990Ig==_

```sh
   npm run develop
```

**To login in:** Create your own account and start
**To deploy:** [Google App Engine Deployment - Strapi Developer Docs](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment/hosting-guides/google-app-engine.html)

# Usage

**Strapi Usage**

- Build a collection type for each page and create component for sections if needed
- Add page content as entry on corresponding field.
- Be sure to publish the content after it is finished.
- Go Setting-> USERS & PERMISSIONS PLUGIN -> roles -> public to check the corresponding field in order to get the data.

Here is what the final website should look like: [Figma Wireframe](https://www.figma.com/proto/c5bBNfzCRal0xi7EWuEK4s/Partner-to-Decide_Final-Handoff-File?node-id=5453%3A18754)

## Deployment

**For deploying frontend to firebase:**
To host locally:

```sh
    $cd frontend
    $npm install && npm run start
```

$cd frontend
$npm install && npm run start

**To redeploy site and push new changes:**

```sh
    $npm run build
    $firebase deploy --only hosting
```

**To redesignate github repo for CI/CD:**

```sh
   $firebase login
   $cd frontend
   $firebase init
```

_follow prompt for connecting to GitHub_

<p align="left">(<a href="#readme-top">back to top</a>)</p>

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
- [ ] Fix Issue with Strapi parsing issue
- [ ] Fix issue with maintaining Strapi data
- [ ] Please see Jira for additonal tasks to be completed, please check-in with client to verify these backlog items: [Jira Page](https://sparkjedi.atlassian.net/jira/software/projects/DS519BU/boards/1/backlog?selectedIssue=DS519BU-28)

See the more detailed [open issues](https://github.com/BU-Spark/se-shared-decision-making/issues) to add recommended features, and to log future issues (Quiz and 404 error included).

<p align="left">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

For future contributions of this project, please first ensure that initial-frontend is merged to main properly before creating new branches.

1. Create your Feature Branch (`git checkout -b INSERT commit-name`)
2. Commit your Changes (`git commit -m 'Insert your commit message, make sure it's detailed'`)
3. Push to the Branch (`git push origin commit-name`)
4. Open a Merge Request for Main

<p align="left">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GPL-3.0 license. See [License](https://github.com/BU-Spark/se-shared-decision-making/blob/main/LICENSE) for more information.

<p align="left">(<a href="#readme-top">back to top</a>)</p>

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
- [How to Create a Survey Application Using Strapi and React.JS](https://strapi.io/blog/creating-a-survey-application-using-strapi-and-react-js)

<p align="left">(<a href="#readme-top">back to top</a>)</p>

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
