import BlogPost from "@/Components/Blog/BlogPost";
import {
    GetServerSideProps,
    GetServerSidePropsContext,
    GetStaticProps,
    GetStaticPropsContext,
    NextPage,
    PreviewData
} from "next";
import React, {useEffect, useState} from "react";
import axios from "axios";
import baseUrl from "@/Helpers/BaseUrl";
import {ParsedUrlQuery} from "querystring";
import {Collection, Db, MongoClient, ObjectId} from "mongodb";
import {CreatePostDefaultValue} from "@/Components/Dash/Create";
import {Box} from "@mui/system";

interface IPost {
    title : string,
    description: string,}
const BlogPostPage : React.FC<IPost> = ({title, description}) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    useEffect(() => {
        const timeout = setInterval(() => {
        },1000)
        setTimeout(() => {
            setIsLoading(false)
            clearTimeout(timeout)
        },4000)
        return () => clearInterval(timeout)
    },[isLoading])
    return <BlogPost isLoading={isLoading} title={title} description={description}/>
}

// export async function getStaticPaths(){
//     const client = await MongoClient.connect('mongodb+srv://proftoby97:kpmDnA3Idt99zbRG@eyeserver.tn3mtek.mongodb.net/?retryWrites=true&w=majority');
//     const db : Db = client.db();
//     const blog : Collection<CreatePostDefaultValue> = db.collection('blogs');
//     const posts = await blog.find({}, { projection:  {_id: 1}}).toArray();
//     await client.close()
//     return {
//         fallback: true,
//         paths :  posts.map((post : any)   =>({params: {post: post._id.toString()},}))
//     }
// }
export const getServerSideProps: GetServerSideProps = async (context ) => {
    const slug : string   | undefined | any = context.params?.post
    const postId = slug?.split('-').shift();
    //perform some async function to fetch data from post
    const response = await axios.get(`${baseUrl}/blog/${postId}`);
    const data = response.data;
    return {
        props: {
            title: data?.title,
            description: data?.description
        }
    }
}

export default BlogPostPage;