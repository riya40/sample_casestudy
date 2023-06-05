const express = require('express')
const mongoose= require('mongoose')
const cors = require('cors')
const Router = require('./Routes/Router')


const app= express();


app.use(cors());
app.use(express.json());
app.use(Router)


const port = 8080;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})

//connection to mongodb
async function connectToDatabase() {
    try {
      await mongoose.connect(
        "mongodb+srv://priyanunna20:Azzgif2YKmaMUtdb@cluster0.lxuh1mf.mongodb.net/?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log("connected to mongodb");
    } catch (error) {
      console.error("error connecting to mongodb", error);
      return;
    }
  }

connectToDatabase();

