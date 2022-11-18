# Recipy

## _A simple REST API that you can store your recipes !_

### _Built with;_
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

# Endpoints

## User endpoints

- ### POST A new user
```
http://localhost:3000/user/new

Input :
{
    "username":"testUser",
    "password":"123456"
}

Output:
{
    "User created"
}

```

- ### POST Login with existing user credentials
```
http://localhost:3000/user/login

Input:

{
    "username":"testUser",
    "password":"123456"
}

Output
{
    "Welcome, testUser"
}
```
- ### GET log out
```
http://localhost:3000/user/logout

Input:

{}

Output
{
    "Successfully logged out"
}
```
## Recipe endpoints

- ### GET All recipes
```
http://localhost:3000/recipes

Input:

{}

Output:
{
    {
        "_id": "6376604cca8dba6ec666b7d3",
        "title": "Mücver",
        "ingredients": "1 tbsp of ingredients\n2 tbsp of other ingredients\n1 bottle of some ingredients",
        "instructions": "The detailed instructions of mücver is written here",
        "image": "uploads\\1668702284374.jpg",
        "createdBy": "testUser",
        "createdAt": "2022-11-17T16:24:44.387Z",
        "updatedAt": "2022-11-17T16:24:44.387Z",
        "__v": 0
    },
    {
        "_id": "637656ad10fc0d1f612ce51a",
        "title": "Another meal",
        "ingredients": "1 tbsp of ingredients\n2 tbsp of other ingredients\n1 bottle of some ingredients",
        "instructions": "The detailed instructions of another meal is written here",
        "image": "uploads\\1668699821170.jpg",
        "createdBy": "testUser",
        "createdAt": "2022-11-17T15:43:41.185Z",
        "updatedAt": "2022-11-17T15:43:41.185Z",
        "__v": 0
    }
}
```
- ### GET A single recipe
```
http://localhost:3000/recipes/6376604cca8dba6ec666b7d3

Input:

{}

Output:
{
    {
    "_id": "6376604cca8dba6ec666b7d3",
    "title": "Mücver",
    "ingredients": "1 tbsp of ingredients\n 2 tbsp of other ingredients\n 1 bottle of some ingredients",
    "instructions": "The detailed instructions of mücver is written here",
    "image": "uploads\\1668702284374.jpg",
    "createdBy": "testUser",
    "createdAt": "2022-11-17T16:24:44.387Z",
    "updatedAt": "2022-11-17T16:24:44.387Z",
    "__v": 0
    }
}
```
- ### POST A new recipe
```
http://localhost:3000/recipes/new

Input:

{
    "title": "Another unique meal",
    "ingredients": "1 tbsp of ingredients\n 2 tbsp of other ingredients",
    "instructions": "The detailed instructions of this unique meal is written here",
    "image":"form-data-image.jpg"
}

Output:
{
    
    "title": "Another unique meal",
    "ingredients": "1 tbsp of ingredients\n2 tbsp of other ingredients",
    "instructions": "The detailed instructions of this unique meal is written here",
    "image": "uploads\\1668702939888.jpg",
    "createdBy": "testUser",
    "_id": "637662dbca8dba6ec666b7da",
    "createdAt": "2022-11-17T16:35:39.895Z",
    "updatedAt": "2022-11-17T16:35:39.895Z",
    "__v": 0

}
```
- ### PUT Update a recipe
```
http://localhost:3000/recipes/update

Input :

{
   
    "_id": "6376604cca8dba6ec666b7d3",    
    "instructions": "The edited instructions of mücver is here."

}

Output : 

{
    "Document updated."
}

Updated document : 

{

        "_id": "6376604cca8dba6ec666b7d3",
        "title": "Mücver",
        "ingredients": "1 tbsp of ingredients\n2 tbsp of other ingredients\n1 bottle of some ingredients",
        "instructions": "The edited instructions of mücver is here.",
        "image": "uploads\\1668702284374.jpg",
        "createdBy": "testUser",
        "createdAt": "2022-11-17T16:24:44.387Z",
        "updatedAt": "2022-11-17T16:42:41.282Z",
        "__v": 0,
        "updatedBy": "anotherTestUser"
    
}
```
- ### DELETE a recipe

```
http://localhost:3000/recipes/delete/6376693eca8dba6ec666b7e5

Input:

{}

Output:
{
    "Document deleted"
}