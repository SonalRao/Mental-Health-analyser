const express = require('express')
const app = express()
const path = require("path")
const  hbs = require("hbs")
require("./db/conn")

const Forms = require("./db/form")
const Feedback = reuire("./db/feedback")

const static_path = path.join(__dirname, "../public")
const viewPath = path.join(__dirname, "../templates/views") 
const partialsPath = path.join(__dirname, "../templates/partials")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static(static_path))
app.set('views',viewPath)
app.set('view engine','hbs')
hbs.registerPartials(partialsPath)


app.get("/", (req, res) => {
    res.render('index',{
        title:"Index Page"
    })
} )

app.get("/Test",(req,res) => {
    res.render('test',{
        title:"test page"
    })
})

app.post("/Test", async(req, res) =>{
    try{
            const eforms = new Forms({
                firstname : req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                question1: req.boby.question1,
                question2: req.body.question2,
                question3: req.body.question3,
                question4: req.body.question4,
                question5: req.body.question5
            })

            const registered = await eforms.save()
            res.status(201).render("index")

    }
    catch(error){
        res.status(400).send(error)
    }
})

app.get("/Contact", (req, res) => {
    res.render('Contact',{
        title:"Contact Page"
    })
} )

app.get("/About", (req,res) => {
    res.render('About',{
        title: "About Us"
    })
})

app.get("/Blog", (req,res) => {
    res.render('About',{
        title: "About Us"
    })
})

app.get("Feedback",(req,res) =>{
    res.render('Feedback',{
        title: "Feedback"
    })
})



