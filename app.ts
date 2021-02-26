import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import podcast from "./router";
import ExpressPinoLogger from 'express-pino-logger'
import fs from "fs";
import path from 'path';
import bodyParser from "body-parser";


let pf = path.join(__dirname, 'podcasts.json')
if(!fs.existsSync(pf)){
    fs.writeFileSync(pf, JSON.stringify([]));
    console.log("Created "+ pf)
}

let pino = ExpressPinoLogger({
    serializers: {
      req: (req) => ({
        method: req.method,
        url: req.url,
       
      }),
    },
  })
const PORT = process.env.PORT

const app = express()

// app.use(pino)

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack)
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

app.use("/", podcast)


app.use(function (req, res, next) {
    res.status(404).json({
        message: "Sorry can't find that!"
    })
})
app.listen(PORT, () => { console.log('http://localhost:' + PORT) });
