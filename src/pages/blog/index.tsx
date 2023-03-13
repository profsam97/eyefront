import Blog from "@/Components/Blog/Blog";
import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import axios from "axios";
import baseUrl from "@/Helpers/BaseUrl";
import React from "react";

type TData = {
    title : string,
    description: string,
    _id: number,
    image: string,
    createdAt: Date
}
interface IData {
    data : TData[]
}
const BlogPage : React.FC<IData> = ({data}) => {
    return <Blog data={data}/>
}

export const getStaticProps: GetStaticProps  = async () => {
    const response =  await axios.get(`${baseUrl}/blogs`);
    const data = response.data;
    return {
        props: {
            data
        }
    }
}

export default BlogPage;