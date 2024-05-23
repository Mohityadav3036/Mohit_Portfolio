const express = require("express")
const app = express();
const cookieParser = require("cookie-parser")


require("dotenv").config();
const PORT = process.env.PORT || 4000
app.use(cookieParser());
app.use(express.json());

require("./config/database").connect();

// impport Routes and mount the Routes
const user = require("./routes/user")
app.use("/api/v1",user)

// app.get('/', (req,res) => {
//     res.send("<h1>MOhit yadav</h1>")
// })

app.listen(PORT,() => {
    console.log(`server run ${PORT}`)
})