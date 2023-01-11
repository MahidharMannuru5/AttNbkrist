
Overview


This project is a web-based application designed to provide attendance and mid-marks checking flexibility to the students of NBKRIST college. The application has two main functions: checking attendance and checking mid-marks. The application allows students to check the attendance ratio for specific classes and see the last updated information. The project is also hosted on GitHub Pages and can be accessed by visiting 
https://mahidharmannuru5.github.io/AttNbkrist/#

Setting up the Project


The project is built using ReactJS and PHP. In order to run the project locally, you will need to have Node.js and a web server with PHP installed on your machine.

Clone the project from GitHub
Go to the project folder and run npm install to install all the necessary dependencies
Start the development server by running npm start
The application will be running on http://localhost:3000



Project Structure
The project is divided into several components and modules, each with a specific purpose. The key components are:

src/components: This directory contains all the React components that make up the user interface of the application.
src/api: This directory contains all the code responsible for making API calls to the college server and handling the data received.
Using the Application
The application can be accessed through a web browser in two ways:

locally by visiting http://localhost:3000 after running the application on your machine
remotely by visiting https://mahidharmannuru5.github.io/<repository> on your browser.
The Application has two pages one for checking attendance and another for checking mid-marks. To check attendance, user needs to enter the roll number and it will show the attendance ration and last updated info if the data is present.
Similar for midmarks too.




API Reference
  
The application makes use of two API endpoints for fetching attendance and mid-marks data. The endpoints are:

/api/attendance: This endpoint is used to fetch attendance data for a specific student. The endpoint expects a query parameter called rollNumber to be passed in the request.

/api/midmarks: This endpoint is used to fetch mid-marks data for a specific student. The endpoint expects a query parameter called rollNumber to be passed in the request.




Screenshots
Include screenshots of the website, that demonstrate how the application works.


