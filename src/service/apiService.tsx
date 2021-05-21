import {parse} from 'fast-xml-parser';
import {FeedDetails} from 'src/models/FeedModal';


export default class ApiService {
  static async fetchFeed(): Promise<FeedDetails> {
    const url = 'http://feeds.news24.com/articles/Fin24/Tech/rss';

    const res = await fetch(url);
    const Data = await res.text();
// Data is in xml and obj is parsed to json
    const obj = parse(Data);

    return obj;
  }
}
