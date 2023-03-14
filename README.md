
# AttNbkrist - A Guided Learning Environment

AttNbkrist is a website designed to provide a guided environment for students. It offers a range of features including Blog system, group , individual chat systems and OneonOne Video calls, custom features to check attendance and mid marks, and now, an upcoming feature of a custom mental health ML model.


## Table of Contents 

 - [Features](#features)
 - [Api Reference](#apireference)
 - [Demo](#demo)
- [Run Locally](#runlocally)
- [Contributing](#contributing)
- [Tech](#techstack)
- [Screenshot](#screenshots)



## Features   <a id="features"> </a>

- Group chat system: The website offers a group chat system which allows students to communicate with their peers and teachers. This is an excellent way to ask questions and discuss topics related to the course.
- Individual chat system: In addition to the group chat system, students also have access to an individual chat system which allows them to communicate privately with their teachers. This is a great way to seek individual guidance and support.
- Custom feature to check sem wise attendance: The website provides a custom feature which allows students to check their attendance for each semester. This feature is updated in real-time and helps students stay on top of their attendance records.
- Custom feature to check mid marks: The website also provides a custom feature which allows students to check their mid marks. This feature is updated in real-time and helps students keep track of their progress throughout the semester.
- Upcoming feature: Custom mental health ML model: Attnbkrist is developing a custom mental health ML model that is designed to detect and analyze emotions in text-based conversations and provide supportive responses. This feature will benefit students who are struggling with mental health issues or feeling overwhelmed. By analyzing their conversations, the model will provide customized responses that are empathetic and supportive.


## API Reference   <a id="apireference"> </a>

#### Get Attendance

```
https://att.nbkrist.co.in/attendance/Apps_ren_Dummy/getSubwiseAttAsJSONGivenRollNo.php?q={rollno}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `rollno` | `string` | **Required**. rollno of student to fetch|

#### Get MidMarks

```
https://att.nbkrist.co.in/attendance/Apps_ren_Dummy/getAllMidMarksAsJSONGivenRollNo.php?q=${rollno}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `rollno`      | `string` | **Required**. rollno of student to fetch |



## Demo   <a id="demo"> </a>

https://mahidharmannuru5.github.io/AttNbkrist/#


## Tech Stack   <a id="techstack"> </a>

**Client:** React, Redux, Bootstrap,FontAwesome

**Server:** Nodejs, Express,PHP

**Backend:** Firebase, MySQL 


## Run Locally    <a id="runlocally"> </a>

Clone the project

```bash
  git clone https://github.com/MahidharMannuru5/AttNbkrist.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```
Start the server

```bash
  npm run start
```




## Contributing to AttNbkrist    <a id="contributing"> </a>
Thank you for your interest in contributing to AttNbkrist! This project is built using Reactjs, PHP, Firebase, Nodejs, and Express js. By contributing to this project, you agree to abide by the Code of Conduct.

Getting Started
Before you contribute, please take a moment to review the project's goals, existing features, and roadmap. You can also check the issues page for tasks that need attention.

`Ways to Contribute`

There are several ways to contribute to AttNbkrist:

`Reporting Bugs and Suggesting Features`

If you find a bug, please report it by opening an issue and providing as much detail as possible about how to reproduce the bug. Similarly, if you have an idea for a new feature, you can open an issue to discuss it.

`Contributing Code`

If you would like to contribute code to AttNbkrist, please follow these steps:

- Fork the repository.
- Create a new branch for your changes.
- Make your changes and commit them with descriptive commit messages.
- Push your changes to your fork.
- Create a pull request to merge your changes into the main repository.
- Please ensure that your code follows the existing coding standards and that it is thoroughly tested.

`Code Style`

When contributing code to AttNbkrist, please follow these style guidelines:

JavaScript code should follow the `Airbnb JavaScript Style `Guide.
PHP code should follow the `PSR-1 and PSR-2` coding standards.

`Development Setup`

If you would like to set up a development environment for AttNbkrist, please follow these steps:

- Clone the repository.
- Install the required dependencies by running npm install.
- Set up the Firebase project and configure the environment variables.
- Start the development server by running npm start.
`Contact`
If you have any questions or need help getting started, please contact us at [20kb1a0581@nbkrist.org].

Thank you for contributing to AttNbkrist!







## Screenshots
   <a id="screenshots"> </a>

`BlogSystem`

![Screenshot from 2023-03-08 15-45-10](https://user-images.githubusercontent.com/81514511/223692026-92ffe165-ae8f-419a-9a5e-7cfb4a318f71.png)


`Groupchat`

![Screenshot from 2023-03-08 15-45-48](https://user-images.githubusercontent.com/81514511/223692067-fa1efae7-2423-431d-a88d-8d5222020c45.png)


`Individualchat`
![Screenshot from 2023-03-08 15-46-03](https://user-images.githubusercontent.com/81514511/223692119-3de53da0-b067-469d-9d46-68a1d44c26ff.png)



`Attendance`

![Screenshot from 2023-03-08 15-46-31](https://user-images.githubusercontent.com/81514511/223692128-00a4498d-5a91-43ad-80d2-b13d31c6f869.png)


                                           


`MidMarks`
![Screenshot from 2023-03-08 15-46-48](https://user-images.githubusercontent.com/81514511/223692155-6d97ac4e-70df-406e-a52e-dab2e276b705.png)


