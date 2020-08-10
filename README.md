# infinity-Performance
# PROJECT 4 README <!-- omit in toc -->

> The Project Planning section **should be completed** for your project pitch with instructors.
>
> To ensure correct Markdown, copy and paste the raw template code into your project repo README file. Remove ALL template instructions and replace with your project details.

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Infinity Perforance** is a project manager app for your current and future project cars. This app will let you track all the cars that you have and all the modifications you plan on doing. You will be able to enter in the type of modification you'd like to make to your car, its cost, and the amount of power it will add to your drive terrian. As you begin completing the list of modifications, you'll be able to cross them off and update the list to show you which modifications you have left. Once all the modifcations are complete, you are able to deem the project as complete. Once in a complete state, it will be moved to a completed section of your home screen.

<br>

## MVP

The **Inifnity Performance** MVP will consist of a full CRUD design with a ruby on rails backend and react front end. Further More: 
- User, Cars, and Modification Tables for my database
- User login option for full autheniciation
- One to many association with Users to  Cars.
- One to many Association with Cars to Modications
- Ability to create, modify, view, and delete cars and modifications
- Ability to check off modifications for a car and view the total cost of all modifications 
<br>

### Goals

- Become more comfortable with developing backend servers and databases with ruby on rails. 
- Become more familar with rails syntax and overarching ideas with rails
- Become more comfortable with developing a product without guidance. Just working with the resources available to me.
- Learn and implement something new 
- Gain a new skillset

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end Development                      |
|   React Router   | Developing all Landing pages               |
|       Ruby       | Assisting with Backend Development         |
|   Ruby on Rails| | Backend Server and Database Development    | 
|       Axios      | API call to our PostgreSQL database        |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

Component Tree: https://app.diagrams.net/#G1RV518jg3UfKm91b0MpsUu4MARVV-Q2K_

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ App.jsx 
      |__Footer.js
      |__Home.jsx
      |__AllVehicles.jsx
      |__SingleVehicle.jsx
      |__AddVehicle.jsx
      |__AllModifications.jsx
      |__Sinlge Modification.jsx
      |__AddModification.jsx
      |__Login.jsx
      |__Register.jsx
|__ services/
      |__APIconfig.js
      |__auth.js
      |__cars.js
      |__modifications.js
      

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo             |
|   Footer       | functional |   n   |   n   | The Footer will proivide links to the contact information, Github and LinkedIn     |
|   Home    |   class    |   y   |   y   | The Home will display a description of the Webisite with an option to sign up and Login      |
|   Add_vehicle    |   class    |   y   |   y   | Add_vehicle will have an option to add the project vehcile the user is working on with a short description of it  |
|   View_all_vehicles  |   class    |   y   |   n   | View_all_vehilces will serve as the main menu landing page of the webisite. User can view all projects   |
|   View_single_vehicle    |   class    |   y   |   n   | View_single_vehicle will display details about the project and the list of modifications assiociated with the project. It will also allow you to edit details about the project vehicle or delete the project as a whole.       |
|      Add_Modification |   class    |   y   |   n   | Add Modification will allow user to add a modification that they would like to tackle for that specific project    |
|   View_singe_Modification   | class |   y   |   n   | View_single_modification will show the details of that specific modification with an option to edit or delete that modification |
|   Login   | class |   y   |   y   | Login landing will have a form that will ask for username, password, and confirm password input fields|
|   Register  | class |   y   |   y   | Register landing page will be a form that will allow users to enter in their email, username, password, and confirm password fields |

#### Time Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| User Authenication  |    M     |     4 hrs      |    TBH       |    TBH   |
| Create CRUD Actions for cars  |    H     |     8 hrs      |     TBH    |     TBD     |
| Create CRUD Actions for Modifications  |    H     |     5 hrs      |     TBH    |     TBD     |
| Backend Server      |    H     |     5 hrs      |     TBH     |     TBD     |
| CSS Styling         |    H     |     5 hrs      |     TBH     |     TBD     |
| TOTAL               |          |     27 hrs      |     TBH    |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model


ERD: https://app.diagrams.net/#G1QpptoRp0LPFDeLUFIm28wdeD0a0plufO

<br>

***

## Post-MVP
 - Implement a timeline feature with calender
 - Estimate total value of vehicle after modifications
 - Reminder functionality about tasks
 - Be able to put the project up for sale for other users to see
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
