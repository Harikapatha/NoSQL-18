
# NoSQL-Social-Network-API

## Description
- NoSQL-Social-Network-API - It is a social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies-Used](#technologies-used)
- [Contribution](#contribution)

## Installation 
To install necessary dependencies, run following command:
```
npm install

```
To seed example data, run following command:
```
npm run seed
```

## Usage
1. start the application by running :
```
node index.js
```
2. explore the API by sending a different type of HTTP requests 
    - GET method to retrieve data
    - POST method to create data
    - PUT method to update data
    - Delete method to remove data

## Features

**User Management**
* User Story
    - As a user
    - I WANT TO be able to use CRUD Operations for managing user data 
    - SO THAT I can create, fetch, update, and delete user datas

* Accepted Criteria 
    - Given I have seeded the data
    - When I send a GET request to the endpoint `/api/users`
    - Then I am presented with all of the user data in the database 
    - When I send a GET request to the endpoint `/api/users/:userId`
    - Then I am presented with the user with the matching user id 
    - When I send a PUT request to the endpoint `/api/users/:userId`
    - Then I can update the user's data such as username and email 
    - When I send a DELETE request to the endpoint `/api/users/:userId`
    - Then the corresponding user is deleted from the user data collection 


**Association between users/thoughts**
* User Story 
    - As a user 
    - I WANT TO be able to get the user/thought data updated as I update the associated model 
    - SO THAT I don't have to update all of the models accordingly 

* Accepted Criteria 
    - When I delete a thought, 
    - Then I can view that the deleted thought is deleted from the associated user's thoughts list 
    - When I delete a user,
    - Then I can view that the associated thoughts are deleted as well. 
    - When I update a user, 
    - Then I can view that the associated friend list and reaction's username is updated as well.


## Technologies-Used
* Back-end 
    - Node.js
    - Express.js
    - MongoDB
  
## Contribution 
1. Create a new branch 
2. Make your contributions/changes 
3. push to the repo 


## Contact

- **Email:** harikanap518@gmail.com
