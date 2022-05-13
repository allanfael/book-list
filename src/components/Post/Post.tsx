import React from 'react';

import { Typography } from '../Typography';
import CardBase from '../CardBase';

import { Container, Image, ContentContainer } from './post.styles';
import { ViewStyle } from 'react-native';

interface Post {
  title: string;
  authors: [string];
  pageCount: number;
  imageUrl: string;
  publisher: string;
  published: string;
}

interface PostProps {
  data: Post;
  style?: ViewStyle;
  onPress?: () => void;
}

const Post = ({ data, style, onPress }: PostProps) => {
  return (
    <CardBase style={style}>
      <Container onPress={onPress}>
        <Image source={{ uri: data.imageUrl }} />

        <ContentContainer style={{ justifyContent: 'space-between' }}>
          <ContentContainer>
            <Typography variant='normalMedium' color='text'>
              {data.title}
            </Typography>
            {data.authors.map((author, index) => (
              <Typography key={index} variant='smallRegular'>
                {author}
              </Typography>
            ))}
          </ContentContainer>

          <ContentContainer>
            <Typography
              style={{ marginTop: 24 }}
              variant='smallRegular'
              color='subtitle'
            >
              {data.pageCount} páginas
            </Typography>
            <Typography variant='smallRegular' color='subtitle'>
              {data.publisher}
            </Typography>
            <Typography variant='smallRegular' color='subtitle'>
              Publicado em {data.published}
            </Typography>
          </ContentContainer>
        </ContentContainer>
      </Container>
    </CardBase>
  );
};

export default Post;
