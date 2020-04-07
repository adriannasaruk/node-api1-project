const express = require("express")
const shortid = require("shortid")

const server = express();

let users = [
    {
    id: 1,
    name: "Adrian Nasaruk",
    bio: "German"  
}]

server.use(express.json())

server.get("/api/users", (req, res) => {
    try {
        res.json(users)
     }
     catch(error){
         res.status(500).json({errorMessage: "The users informations could not be retrieved"})
     }
    
})


server.get("/api/users/:id", (req,res) => {
   const id = req.params.id

    const user = users.find((user) => user.id == id)

if (!user) {
    res.status(404).json({message: "The user with the specified ID does not exist." })
}
     else {
        try{ 
            res.status(201).json(ser)
        }
        catch{
            res.status(500).json({errorMessage: "The user information could not be retrieved."})
        }
    }
        
})





server.post("/api/users", (req, res) => {
    const usersInfo = req.body; 
 if (usersInfo.name == null || usersInfo.bio == null){
        res.status(404).json({ errorMessage:  "Please provide name and bio for the user."})
    } else {
        try {
            users.push(usersInfo);
            res.status(201).json(users);
        }
        catch (error){
            console.log(error)
            res.status(500).json({errorMessage: "There was an error while savong the user to the database"})
        }
    }
    
})

const port = 5000;

server.listen(port, () => console.log (`\n == api on port ${port} ==\n`))