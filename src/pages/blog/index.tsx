import Blog from "@/Components/Blog/Blog";
import { GetServerSideProps, NextPage } from "next";

const BlogPage : NextPage = () => {
    return <Blog/>
}

export const getServerSideProps : GetServerSideProps = async () => {
    const response = '';
    return {
        props: {
            data: 'test'
        }
    }
}

export default BlogPage;