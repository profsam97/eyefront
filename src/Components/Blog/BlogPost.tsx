import { Container } from "@mui/system";
import Header from "./Header";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
import Main from "./Main";
import React from "react";
import Nav from '../Layouts/Header'
import Footer from "@/Components/Layouts/Footer";
interface IPost {
    title: string,
    description: string
}
const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };
const BlogPost : React.FC<IPost> = ({title, description}) => {

    return <>
        <Nav/>
             <Container maxWidth={'lg'}>
                <Header/>
                <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main  title="title" posts={'sds ds ds d sjds djs dsd sjd s  d sd j  sd s  djs d'} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
            </Container>
        <Footer/>
    </>
}
export default BlogPost;