
const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}`)
    next()
})

let users = [
    {id: 1, name: 'Kabin'},
    {id: 2, name: 'Ghale'}
]


//GET Route
app.get('/api/users', (req,res) => {
    res.status(200).json(users)
});

//POST
app.post('/api/users', (req,res) => {
const {name} = req.body;

if (!name) {
return res.status(200).json({error:"name is required"})
}

const newUser = {
id: users.length+1,
name: name
}

users.push(newUser)
res.status(201).json(newUser)
})

//start express server

app.listen(PORT, () => {
console.log(` server running on port:${PORT} `)
})
