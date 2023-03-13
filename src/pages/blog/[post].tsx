import BlogPost from "@/Components/Blog/BlogPost";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import axios from "axios";
import baseUrl from "@/Helpers/BaseUrl";
interface IData {
    title : string,
    description: string,

}
interface IPost {
    data : IData
}
const BlogPostPage : React.FC<IPost> = ({data}) => {

    const {description, title} = data;
    return <BlogPost  title={title} description={description} />
}


export const getServerSideProps : GetServerSideProps = async (context : GetServerSidePropsContext) => {
    const slug : string   | undefined | any = context.params?.post
    const postId = slug?.split('-').shift();
    //perform some async function to fetch data from post
    const response = await axios.get(`${baseUrl}/blog/${postId}`);
    const data = response.data;
    return {
        props: {
            data
        }
    }
}

export default BlogPostPage;