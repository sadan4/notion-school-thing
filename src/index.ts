import { NOTION_TOKEN } from "./config.json"
import * as notion from "@notionhq/client"


export const Client = new notion.Client({
    auth: NOTION_TOKEN
})

console.log(await Client.users.list({

}))