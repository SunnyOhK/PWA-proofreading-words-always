# PWA: Proofreading Words Always
A PWA single-page text editor application that runs in the browser and functions offline.
🖋️✏️

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit) 


## Description
<i>PWA: Proofreading Words Always</i> is a single-page text editor application that operates in both a web browser (online) or a locally installed application (offline).


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

## Installation

This is deployed as a live webpage through Heroku and can be accessed here: [PWA: Proofreading Words Always](https://pwa-proofreading-words-always.herokuapp.com/)

To install the offline Chrome application, please visit the website above and click "Install!" Additional detail with screenshots are provided in the Usage section.


If you are interested in replicating this project into your local repo, please follow these command line steps to build and run the application:

1. Clone the GitHub repository to your local environment using the provided SSH key.

        git clone git@github.com:SunnyOhK/PWA-proofreading-words-always.git


2. From your command line:
    - Insure that all node packages have been installed at the root folder

          /PWA-proofreading-words-always
              npm i
    - To build the application and start the server, there are several paths you may take:
    
          /PWA-proofreading-words-always
              npm run start:dev --> concurrently \"cd server && npm run server\" \"cd client && npm start\"
              npm run start --> npm run build && cd server && node server.js
              npm run server --> cd server nodemon server.js --ignore client
              npm run build --> cd client && npm run build
              npm run install --> cd server && npm i && cd ../client && npm i
              npm run client --> cd client && npm run dev

            
    - You can then access the site from your Local Host


## Usage 

![](./client/src/images/browser-application.png)
![](./client/src/images/homepage-install.png)
![](./client/src/images/offline-application.png)
![](./client/src/images/chrome-apps.png)


## Technology Stack

|  | Tech Stack | Description |
| ---- | --- | --- |
| Foundation |  |  |
| <img height="20px" src="assets/jsIcon.png"> | JavaScript | Scripting language for webpages |
| <img height="20px" src="assets/mongoIcon.png"> | MongoDB | Cross-platform document-oriented database program |
| <img height="20px" src="assets/nodeIcon.png"> | Node.js | Javascript Framework |
| Testing |  |  |
| <img height="20px" src="assets/insomniaIcon.png"> | Insomnia REST | Collaborative open source API development platform |
| npm Packages |  |  |
| <img height="20px" src="assets/mongooseIcon.png"> | mongoose | MongoDB object modeling for Node.js |
| <img height="20px" src="assets/nodemon-icon.png"> | Nodemon | Utility to monitor code changes and restart server |
| <img height="20px" src="assets/expressJsIcon.png"> | Express | Node.js module |
| <img height="20px" src="assets/momentIcon.png"> | Moment.js | Date &time display for JavaScript |


## Credits
- Alex Gonzalez: EdX Tutor


## License
This project is licensed under: [MIT](https://choosealicense.com/licenses/mit/)
<br>

## Contact

For questions, please contact me:

### GitHub: 
  &nbsp;&nbsp;&nbsp; [SunnyOhK](https://github.com/SunnyOhK)
### Project Link: 
  &nbsp;&nbsp;&nbsp; https://github.com/SunnyOhK/silly-mongoose
### Email: 
  &nbsp;&nbsp;&nbsp; 127900916+SunnyOhK@users.noreply.github.com
