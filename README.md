# Employer-Profile-Generator

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Description
The project aims to provide a user input generated webpage that renders clearly. The Employer Profile Generator is a command-line-input application run in Node that requests information from the user about members of a team and generates an HTML file displaying that information. Before running the application, the user must perform an npm install to install all required dependencies (inquirer, jest).

***

## Demo
![Monique's Employer Profile Generator](Employer-Profile-Generator.gif) 
Watch the video hosted on [Youtube](https://youtu.be/dAlRATG2peE) 

My Employer Profile Generator will run as the above gif displays. Use node index.js in command-line to initialise.


## Live Link
You can visit this site at [Mon Levey's GitHub Pages](https://monlevey.github.io/Employer-Profile-Generator/)

<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>

## Usage
 This app was created using Object-Oriented Programming concepts, namely using classes and constructors to create team member objects based on information entered by the user. The app is run using Node.js, and uses the "Inquirer" and "FS" node modules. Files for different objects are also stored in separate .js files and passed among one another using module.exports and require.

This app uses concepts from Test-Driven Development. Jest is used to perform unit tests on all the class constructors to ensure that they behave as expected. The FS node module is used to generate an HTML file from strings written in JavaScript.  

## License
MIT 