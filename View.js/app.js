const express = require('express')
const app = express();
const port = 8000;
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const path= require('path')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

//method override
app.use(methodOverride('_method'))

//connect app.js with public folder
app.use(express.static(path.join(__dirname,'public')))

//body parse
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',indexRouter)
app.use('/users',usersRouter)


app.listen(port,() => {console.log(`app listening port is ${port}`)})