import express, { } from "express";
const app = express.Router();
import { readFileSync, writeFileSync } from "fs";
import path from 'path';
import { Podcast, PlayerAudio } from "./cast";
import Parser from 'rss-parser';
import { type } from "os";

let pf = path.join(__dirname, 'podcasts2.json')

const parser = new Parser();


async function addRss(rss: string) {
    let feed = await parser.parseURL(rss);
    let podcast: Podcast = {
        rss: rss,

        description_original: feed.description || "none",

        title_original: feed.title || "none",

        publisher_original: feed.itunes?.author || feed.items[0]?.creator || "none",
        image: feed.image?.url || "krc.png",
        id: "h078ht4",
        total_episodes: feed.items.length,
        explicit_content: feed.itunes?.explicit !== "No"
    }
    let ret: Podcast[] = [];

    ret = JSON.parse(readFileSync(pf).toString())
    ret.push(podcast)
    writeFileSync(pf, JSON.stringify(ret));
    console.log("added " + rss)

    return podcast;
}

async function getAudio(rss: string) {
    let feed = await parser.parseURL(rss);
    let n: PlayerAudio[] = []
    n = (feed.items.slice(0, 10).filter(item => !!item.enclosure && !!item.title && !!item.itunes).map((item, i) => {
        return {
            src: item.enclosure?.url || 'none',
            typ: item.enclosure?.type || 'none',
            title: item.title || 'none',
            duration: item.itunes.duration,
            episode: item.itunes.episode || feed.items.length - i
        }
        //  letitem.enclosure?.url)
    }))

    return n;
}

app.get("/podcasts", (req, res) => {


    let ret: Podcast[];
    let { limit } = req.query;
    let lim: number = 0

    ret = JSON.parse(readFileSync(pf).toString())
    if (limit && typeof limit == "string") lim = parseInt(limit);
    if(!isNaN (lim) && lim > 0 && ret.length > lim) ret = ret.slice(0, lim)
    res.send(ret)
})

app.get("/podcast", async (req, res) => {
    if (!req.query.rss) res.status(400).json({ message: "Empty Request" });
    try {
        let { query } = req
        let n: PlayerAudio[] = []
        let { rss, limit } = query
        console.log("fetching " + query.rss)
        let lim: number
        if (rss && typeof rss == "string") n = await getAudio(rss)
        else throw new Error("Bad Request")
        if (limit && typeof limit == "string") {
            lim = parseInt(limit);
            if (isNaN(lim)) throw new Error("Bad Request");
            if (n.length > lim) n = n.slice(0, lim)

        }
        console.log("fetched " + n.length + " results")
        res.json(n)

    } catch (error) {

        console.log(error.stack)
        res.status(500).json({
            message: error.message
        })
    }

})

app.post("/podcasts", async (req, res) => {
    let { body } = req;
    if (!body) res.status(400).json({ message: "Empty Request" })
    if (!body.rss) res.status(400).json({ message: "Empty Request" })

    let podcast: Podcast;
    podcast = await addRss(body.rss)
    res.json(podcast)
})

app.post("/add-podcasts", async (req, res) => {
    let { body } = req;
    if (!body) res.status(400).json({ message: "Empty Request" })
    if (!body.rsses) res.status(400).json({ message: "Empty Request" })
    let podcasts: Podcast[] = [];
    for (let rss of body.rsses) {
        let podcast: Podcast;
        console.log("adding " + rss)
        podcast = await addRss(rss);
        podcasts.push(podcast);
    }
    res.json(podcasts)
})




export default app;

