import { News } from "./News"

export interface StreamNews {
    actualChannel: string,
    channel: string,
    message: Array<News>,
    publisher: string,
    subscribedChannel: string,
    subscription: string,
    timetoken: string
}