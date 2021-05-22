import axios from 'axios';
import {FeedDetails} from 'src/models/FeedModal';

export default class ApiService {
  static async fetchFeed(): Promise<FeedDetails> {
    const url = 'http://feeds.news24.com/articles/Fin24/Tech/rss';

    // using axios for integrating API
    const res = await axios.get(url);
    const Data = await res.data
  
// Data is in xml and xmlParsedData is parsed to json
const XMLParser = require('react-xml-parser');
const xmlParsedData = new XMLParser().parseFromString(Data);    

return xmlParsedData;
  }
}
