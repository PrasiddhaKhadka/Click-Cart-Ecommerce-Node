require('dotenv').config()

// EXPRESS
const express = require('express')
const app = express()
const morgan = require('morgan')

// DATABASE
const connectDB = require('./db/connect')
// MIDDLEWARES
const notFound = require('./middlewares/not-found')
const errorHandler = require('./middlewares/error-hanlder')

app.use(morgan('tiny'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('API WORKING!');
})

// ROUTERS
const authRouters = require('./routes/auth-routes')
app.use('/api/v1/auth',authRouters)


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 8000
const startApp = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL)
        app.listen(PORT,()=>{
            console.log('Server Running at 8000')
            })
        
    } catch (error) {
        console.log(error)
    }
}



startApp()

