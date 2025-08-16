const express = require("express");
const connectMDB = require('./connection');
const router = require('./routes/url')

const app = express();
const PORT = 8002;


connectMDB("mongodb://localhost:27017/url_short_git").
    then(()=>console.log("mongoDb Connected")).
    catch(()=>console.log("error connecting Mongodb"));

app.use(express.json());
app.use('/',router);

app.listen(PORT,()=>console.log(`server Started at PORT : ${PORT}`));