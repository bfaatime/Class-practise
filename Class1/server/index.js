const express = require('express')
const mongoose = require('mongoose');
const productRouter = require("./routes/productRouter");
const app = express();



app.use(express.json());
app.use("/api/products", productRouter);
const PASSWORD= "fatimacbazmp202";
const PORT = 8080;


      

mongoose.connect('mongodb+srv://fatimacbazmp202:fatima123@cluster0.b94na.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log("DB Connected"))
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })

