const express = require('express')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config();

const app = express()


//middleware 
app.use(express.json()) // wont have data in req.body without this. Remember app.use allows the middleware to be used in all the routes

// routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})




// app.get('/api/tasks) get all the tasks
app.use('/api/tasks', tasks)
// app.post('/api/tasks) create a new task
// app.get('/api/tasks/:id) get a task by id
// app.patch('/api/tasks/:id) update a task by id
// app.delete('/api/tasks/:id) delete a task by id

const port = 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , () => {console.log( `Server is listening on port ${port}!`)})
    }
    catch (err) {
        console.log(err)
    }
}


start()

