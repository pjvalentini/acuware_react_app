# acuware_react_app

AcuWare was created to help first year acupuncture students.

  - AcuWare offers up data relating to the Point Merdians of the body. (This application display only    one channel now but will be scaled up to offer more data soon, and relfect more channels)
  - Part of the students at Pacific College curricular requirements they have to produce index cards     as study materials.
  - These Students often have to source multiple texts in order to generate one index card, so AcuWare   can streamline that process down to seconds as opposed to several minutes sourcing data, if not      more.

Front End Technologies Used:

 - HTML, CSS / Materialize CSS, JavaScript, JQuery and ReactJS.

Back End Technologies Used:

 - Nodejs, Sequelize, Passport, PostgreSQL.

API:

  - Created a custom API for this project as there was not a suitable one already created.
  - The AcuWare API is stored and is backed up to a PostgreSQL database.

AcuWare Application Features:

  - Secure sign up and sign in using passport.  Once signed up you can then login and source the data.
  - Once on the UserHome page you can interface with the dropdown menu and get information on the Meridian of your choice.
  - The return of the points data can be now used to generate index cards.
  - Once the study session of over you can logout.

Design Features:

  - AcuWare was designed with mostly custom CSS and I used Materialize CSS for additional design.

Running the application on locallly on your machine:
  - 1. git clone
  - 2. Navigate inside of the acuware_react_app file
  - 3. To download modules, run in the terminal - npm i or npm install
  - 4. To run the app: 

          A) Run the Webpack:
              - 1. Open a terminal window
              
              - 2. run in the termianl - webpack -w
          
          B) Start the App
              - 1. Open a second terminal window
              
              - 2. run in the cmd - npm start

  - 5. Go to:  http://localhost:8000



Heroku URL:
 - AcuWare is deployed on Herkou via this url : https://serene-earth-77542.herokuapp.com/
