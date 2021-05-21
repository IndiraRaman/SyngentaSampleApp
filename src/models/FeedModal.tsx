export interface FeedDetails{
    rss?: Rss
}
export interface Rss{
    channel?: Channel
}
export interface Channel{
title?: string;
link?: string;
generator?: string;
docs?: string;
lastBuildDate?: string;
pubDate?: string
item?: Item
}

export interface Item{
title?: string;
description?: string
link?: string;
pubDate?:string
enclosure?: Enclosure
}

export interface Enclosure{
_url?:string;
_length?:string;
_type?: string;
}
        

    


