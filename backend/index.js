const express = require('express')
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
const cors=require('cors')

const app = express()
const PORT = 8081

//middleware
app.use(cors({credentials:true}))
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send("hello world..")
})

app.post('/user', (req, res) => {
     
    const userdata = req.body
  console.log(userdata,"checking")
    if (!userdata){
        console.log(userdata)
        throw new Error("no data found")
    }
    
   
    res.status(200).json({
        status: "success data received",
        data: userdata
    })
})

app.listen(PORT, () => {
    console.log('Your app is running at the port 8081')
})