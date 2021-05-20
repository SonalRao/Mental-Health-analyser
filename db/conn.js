const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mental-health-form:pblprojecth6@cluster0.bfy7j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("connection successful")
}).catch(() => {
    console.log("connection error")
})