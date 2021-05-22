// creating an interface
export interface FeedDetails {
  attribute?: object;
  name?: string;
  value?: string;
  progress?: boolean;
  children?: Children[]
}
export interface Children {
  attribute?: object;
  name?: string;
  value?: string;
  children?: Children[]
}
export interface Attribute {
  url?: string;
  type?: string;
  length?: string
}

