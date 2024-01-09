import { Metadata } from "next";
import { getPost } from "@/app/_services/notion";
import ReactMarkdown from "react-markdown";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

 
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const id = params.slug
 
  const post = await getPost(params.slug);
 
  return {
    title: post.title,
    description:post.description,
   
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  return (
    <div className="w-full min-h-screen">
      <div className="m-auto max-w-4xl bg-blue-900 bg-opacity-10 px-5 my-5 md:px-12 md:py-3 min-h-screen rounded-2xl border-b-2 border-blue-700 border-opacity-40 border-t-2">
       

        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-xl py-6 flex justify-center font-bold " {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-lg font-semibold opacity-90 my-4" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-[1.1rem] font-semibold opacity-90 my-3" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="text-sm opacity-90  my-3 mx-2" {...props} />
            ),

            ol: ({ node, ...props }) => (
              <ol className="text-md font-normal ml-12 list-decimal my-2" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="text-md font-normal ml-12 list-disc my-2" {...props} />
            ),
            hr: ({ node, ...props }) => (
              <hr className=" my-5" {...props} />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote className="p-4 my-5 mx-2 border-s-4  bg-blue-900 bg-opacity-20 font-sans font-medium opacity-80" {...props} />
            ),
            // code({ node, className, children, ...props }) {
            //   const match = /language-(\w+)/.exec(className || '')
            //   return match ? (
            //     <SyntaxHighlighter
            //       // eslint-disable-next-line react/no-children-prop
            //       children={String(children).replace(/\n$/, '')}
            //       language={match[1]}
            //       style={{ style: nord }}
            //       {...props}
            //     />
            //   ) : (
            //     <code className={className} {...props}>
            //       {children}
            //     </code>
            //   )
            // },
            
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}