import * as dotenv from "dotenv";
dotenv.config();
import  express  from "express";
console.log("starting connection server")

import Users from "./models/users";
import { postgesConnect } from "./databse/bootstrap";
const port =process.env.PORT;

const app = express();
console.log(`---here is pg log------`)
postgesConnect();

app.listen(port, ()=> {
    console.log(`ok on ${port}`)
});
