import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActions } from '@mui/material';
import truncate from '@/Helpers/helpers';
import {router} from "next/client";
import {useRouter} from "next/router";
import slug from 'slug';

interface FeaturedPostProps {
  post: {
    date: string;
    id: number,
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  const router = useRouter();
  return (
      <CardActionArea component="a" href="#">
        <Card>
        <CardMedia
            component="img"
            sx={{ width: '100%', height:'200px', display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {truncate(post.description, 100)}
            </Typography>
          </CardContent>
            <CardActions>
                <Button size='small' variant="contained" className={'gift'} sx={{cursor: 'pointer', backgroundColor: '#EC9535'}} onClick={() => router.push('/blog/[post]', `/blog/${post.id}-${slug(post.title)}` )}>
                    Readmore
                </Button>
            </CardActions>
        </Card>
      </CardActionArea>
  );
}