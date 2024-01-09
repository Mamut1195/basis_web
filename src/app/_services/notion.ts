"use server";
import { Client } from "@notionhq/client";
import { NotionDatabaseResponse } from "../_types/notion"
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const DATA_BASE_ID = "20b3a66ae98149048f898982d7c2b430"

export async function getPosts() {
  const databaseId = DATA_BASE_ID ;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
//   console.log(response)
// }
  const typedResponse = (response as unknown) as NotionDatabaseResponse

  return typedResponse.results.map((posts)=>{
    return {
      id: posts.id,
      title: posts.properties.Name.title[0].plain_text,
      slug: posts.properties.Formula.formula.string,
      createdat : posts.last_edited_time,
      description : posts.properties.Description.rich_text[0].text.content,
      tag : posts.properties.tags.multi_select.map((tag)=> tag.name),
      published : posts.properties.Published.checkbox,
    }
  })


}

export async function getPost(Formula: string) {
  const response = await notion.databases.query({
    database_id: DATA_BASE_ID,
    filter: {
      or: [
        {
          property: "Formula",
          rich_text: {
            equals: Formula,
          },
        },
      ],
    },
  });

  const pageId = response.results[0].id;



  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(pageId, 2);
  const mdString = n2m.toMarkdownString(mdblocks);
  

  const typedResponse = response as unknown as NotionDatabaseResponse;

  return {
    title: typedResponse.results[0].properties.Name.title[0].plain_text,
    content: mdString.parent,
    description:typedResponse.results[0].properties.Description.rich_text[0].text.content
    
  };
  
}