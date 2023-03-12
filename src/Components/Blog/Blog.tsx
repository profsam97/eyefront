import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import  Nav from  '../Layouts/Header'
import Footer from "@/Components/Layouts/Footer";
const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  id: 1,
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
};

interface IMain {
  title: string,
  id: number,
  image: string,
  description: string
}

interface IData {
  data: IMain[]
}
const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    id: 1,
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    id: 2,
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

// const posts = [post1, post2, post3];




const Blog : React.FC<IData> = ({data}) => {
  return (
    <>
      <CssBaseline />
      <Nav/>
      <Container maxWidth="lg">
        <Header  />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <Stack spacing={2} sx={{mb:5}} >
                <Typography variant='h6'>Recent Posts  </Typography>
            <Grid container >
              {featuredPosts.map((post) => (
                  <Grid item xs={12}sx={{mr:2}} sm={6} md={4} lg={3} key={post.title}>
                    <FeaturedPost  post={post} />
                  </Grid>
              ))}
            </Grid>
          </Stack>
        </main>
      </Container>
    <Footer/>
    </>
  );
}
export default Blog;