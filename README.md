
![Logo](https://raw.githubusercontent.com/SchoolOfCode/w9_backend-project-power-coders-fe/main/public/images/logo.PNG)

# SOC WELLBEING TOOLKIT - FRONT-END

The SoC Wellbeing Toolkit helps bootcampers manage their wellbeing using tools and resources in one handy location.

This is the front-end documentation for the app.

You can view the App live [here](https://soc-wellbeing-toolkit.netlify.app/)

The front-end provides a wellbeing toolkit for a Schoolof Code bootcamper to assist with remote learning.

Looking for the [Back-end?](https://github.com/SchoolOfCode/w9_backend-project-power-coders-fe)


## Features
- Slides of wellbeing resources for each Thursday mindset session.
- 5-minute break timer (currently auto starts on refresh).
- Calming waves sound (toggle on/off).
- Random inspirational quote.
- Wellbeing check-in form, which feeds back to your enablement coach.


## Installation

```bash
  git clone https://github.com/SchoolOfCode/w9_frontend-project-power-coders-fe.git
  
  cd w9_backend-project-power-coders-fe/power-coders-app
  
  npm i
```


## Documentation
This is not yet deployed, so only works on localhost:3000 (front-end).

To run the front end:

```bash
  npm start
```


## Roadmap
### Next Steps
- Fix carousel CSS glitches - ½ day
- Make app responsive/mobile first  - 2 days
- Turn break timer into a button - 1 hour

### Stretch Goals
- Login feature 
- Multiple page application - ability to search for resources by category and week and display on different pages
- User ratings of resources


## Known Issues
When the image and text size increases on the slides the page jumps up and down. This is due to the styling of the carousel. We would fix this by removing the imported bootstrap carousel and designing and implementing our own carousel.


## Running Tests

End-to-end test suites have been implemented using Cypress.

To run tests in the Cypress app, run the following command and then click on the individual specs.

```bash
  npx cypress open
```

To run test in the comman line, run the following command

```bash
  npm run cy:run
```

## Tech Stack

**Client:** React, JS, HTML, CSS, Bootstrap, Cypress


## Appendix

Features currently not implemented, but hard coded.
- Profile picture
- Personalised welcome message
- Buger menu links


## Authors

- [@Abdullatif Farah](https://github.com/Afrosweetness2002)
- [@Craig Summers](https://github.com/AlphaPentagon)
- [@Dave Hazeldean](https://github.com/dvhzldn)
- [@Emma Kennard](https://github.com/Elkennard)
- [@Rajesh Reel](https://github.com/Rajesh-Reel)


## Acknowledgements

 - [Joseph Trodden](https://www.linkedin.com/in/josephtrodden/?originalSubdomain=uk)
 
 Documentation created using [readme.so](https://readme.so/)

