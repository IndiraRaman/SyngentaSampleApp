import axios from "axios";
import React from "react"
import { parse } from 'fast-xml-parser';
import { FeedDetails } from "src/models/FeedModal";
//import XMLParser from "react-xml-parser"



export default class ApiService {
    
    static async fetchFeed():Promise<FeedDetails>{
        
    const url = "http://feeds.news24.com/articles/Fin24/Tech/rss"

    const res = await fetch(url)
    const Data = await res.text()
    
    const obj = parse(Data)
    // const item = obj.rss.channel.item.enclosure._url
    console.log("Item", obj)
    
    return obj
    

    // console.log("Data", Data)
    // console.log("obj", obj)
    
    }
}


