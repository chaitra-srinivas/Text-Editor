# [Text Editor](https://sleepy-beach-16739.herokuapp.com/) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Overview

Text Editor is a single page web application that runs in the browser and meets the PWA criteria. The application is installable and can function offline. This application is built using JavaScript, Express.js. IndexedDB is used for data persistance on the client side. 


## User Story

```
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use

```

## Acceptance Criteria

```
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application

```

## Table of Contents

- [Overview](#overview)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Questions](#questions)
- [License](#license)

  ## Installation

  - Clone repository.
  - Should have access to Visual Studio
  - Run npm install to install packages/dependencies (Express, Codemirror).
  - Run npm start from the root to build and start the     server

  ## Usage

  Open the Integrated Terminal from the root directory of the application and run the command Run npm start from the root to build and start the server. The application is launched on port 3000

  ## Screenshots

  ![Manifest](/images/Manifest.png)

  ![Service Workers](/images/ServiceWorkers.png)

  ![IndexedDB](/images/IndexedDB.png)
 
   ## Questions

  For any questions regarding the project please visit my
  GitHub Profile @
  [chaitra-srinivas](https://github.com/dfdfgfd)
  or you can reach me @ cmurthy.dev@gmail.com

  ## License

  [MIT](https://opensource.org/licenses/MIT)
  This application is convered under the MIT License.

  Copyright © 2021 Chaitra Srinivasamurthy
