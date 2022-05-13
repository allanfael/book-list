import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Typography } from '@components';

import { BookDTO } from '@dto/BookDTO';

import aspas from '@assets/images/aspas.png';
import back from '@assets/images/back.png';

import {
  Container,
  ImageContainer,
  Image,
  InfoContainer,
  Aspas,
  AspasContainer,
  BackButton,
  BackArrow,
} from './bookDetails.styles';

const BookDetails = ({ navigation }) => {
  const route = useRoute();
  const book: BookDTO = route.params.book;

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <BackArrow source={back} />
      </BackButton>

      <ImageContainer>
        <Image source={{ uri: book?.imageUrl }} />
      </ImageContainer>

      <Typography
        style={{ marginTop: 24 }}
        variant='bigMedium'
        color='text'
        numberOfLines={2}
      >
        {book?.title}
      </Typography>

      {book?.authors.map((author) => (
        <Typography variant='normalRegular' key={author}>
          {author}
        </Typography>
      ))}

      <Typography
        variant='normalMedium'
        color='text'
        style={{
          marginTop: 32,
          marginBottom: 20,
          alignSelf: 'flex-start',
        }}
      >
        INFORMAÇÕES
      </Typography>

      <InfoContainer>
        <Typography variant='normalRegular' color='text'>
          Páginas
        </Typography>
        <Typography variant='normalRegular' color='subtitle'>
          {book?.pageCount} páginas
        </Typography>
      </InfoContainer>

      <InfoContainer>
        <Typography variant='normalRegular' color='text'>
          Editora
        </Typography>
        <Typography variant='normalRegular' color='subtitle'>
          {book?.publisher}
        </Typography>
      </InfoContainer>

      <InfoContainer>
        <Typography variant='normalRegular' color='text'>
          Publicação
        </Typography>
        <Typography variant='normalRegular' color='subtitle'>
          {book?.published}
        </Typography>
      </InfoContainer>

      <InfoContainer>
        <Typography variant='normalRegular' color='text'>
          Idioma
        </Typography>
        <Typography variant='normalRegular' color='subtitle'>
          {book?.language}
        </Typography>
      </InfoContainer>

      <InfoContainer>
        <Typography variant='normalRegular' color='text'>
          Título original
        </Typography>
        <Typography variant='normalRegular' color='subtitle'>
          {book?.title}
        </Typography>
      </InfoContainer>

      <InfoContainer>
        <Typography variant='normalRegular' color='text'>
          ISBN10
        </Typography>
        <Typography variant='normalRegular' color='subtitle'>
          {book?.ibsn10}
        </Typography>
      </InfoContainer>

      <InfoContainer>
        <Typography variant='normalRegular' color='text'>
          ISBN13
        </Typography>
        <Typography variant='normalRegular' color='subtitle'>
          {book?.ibsn13}
        </Typography>
      </InfoContainer>

      <InfoContainer>
        <Typography variant='normalRegular' color='text'>
          Categoria
        </Typography>
        <Typography variant='normalRegular' color='subtitle'>
          {book?.category}
        </Typography>
      </InfoContainer>

      <Typography
        variant='normalMedium'
        color='text'
        style={{
          marginTop: 32,
          marginBottom: 20,
          alignSelf: 'flex-start',
        }}
      >
        RESENHA DA EDITORA
      </Typography>

      <Typography
        style={{ marginBottom: 56, textAlign: 'justify' }}
        variant='normalRegular'
        color='subtitle'
      >
        <AspasContainer>
          <Aspas source={aspas} />
        </AspasContainer>{' '}
        {book?.description}
      </Typography>
    </Container>
  );
};

export default BookDetails;
