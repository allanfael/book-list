import React, { useEffect, useState } from 'react';
import { ListRenderItem, Animated, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {
  booksRequest,
  clearBooks,
  bookTitle,
  searchByTitle as searchByTitleRequest,
} from '@store/ducks/books';
import { logout } from '@store/ducks/auth';
import { RootState } from '@store/ducks/rootReducer';

import { Post, Header, Loading } from '@components';

import { BookDTO } from '@dto/BookDTO';

import { Container, FlatList } from './bookList.styles';

const HeaderComponent = (
  headerHeight: number,
  imageHeight: number,
  imageWidth: number,
  searchOpacity: number
) => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(bookTitle({ title: text }));
  }, [text]);

  const searchByTitle = () => {
    dispatch(clearBooks());
    dispatch(searchByTitleRequest({ title: text, page: 1 }));

    Keyboard.dismiss();
  };

  return (
    <Header
      style={{ height: headerHeight }}
      imageStyle={{ height: imageHeight, width: imageWidth }}
      searchOpacity={searchOpacity}
      value={text}
      onChangeText={(e) => setText(e)}
      onPress={() => {
        dispatch(logout());
        dispatch(clearBooks());
      }}
      searchOnPress={() => !!text && searchByTitle()}
    />
  );
};

const BookList = ({ navigation }) => {
  const dispatch = useDispatch();
  const { books, loading, title } = useSelector(
    (state: RootState) => state.books
  );

  const [page, setPage] = useState(1);

  const [scrollY] = useState(new Animated.Value(0));
  const HEIGHT_MAX = 120;
  const HEIGHT_MIN = 60;
  const HEIGHT_IMAGE_MAX = 40;
  const HEIGHT_IMAGE_MIN = 30;
  const WIDTH_IMAGE_MAX = 300;
  const WIDTH_IMAGE_MIN = 230;
  const OPACITY_MAX = 1;
  const OPACITY_MIN = 0;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEIGHT_MAX - HEIGHT_MIN],
    outputRange: [HEIGHT_MAX, HEIGHT_MIN],
    extrapolate: 'clamp',
  });

  const imageHeight = scrollY.interpolate({
    inputRange: [0, HEIGHT_MAX - HEIGHT_MIN],
    outputRange: [HEIGHT_IMAGE_MAX, HEIGHT_IMAGE_MIN],
    extrapolate: 'clamp',
  });

  const imageWidth = scrollY.interpolate({
    inputRange: [0, HEIGHT_MAX - HEIGHT_MIN],
    outputRange: [WIDTH_IMAGE_MAX, WIDTH_IMAGE_MIN],
    extrapolate: 'clamp',
  });

  const searchOpacity = scrollY.interpolate({
    inputRange: [0, HEIGHT_MAX - HEIGHT_MIN],
    outputRange: [OPACITY_MAX, OPACITY_MIN],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    dispatch(booksRequest(page));
  }, []);

  const loadMore = () => {
    setPage(page + 1);

    if (!!title && !loading) {
      return dispatch(searchByTitleRequest({ title, page }));
    }

    if (!loading) {
      return dispatch(booksRequest(page));
    }

    return null;
  };

  const renderItem: ListRenderItem<BookDTO> = ({ item, index }) => (
    <Post
      data={item}
      style={{ marginTop: 16 }}
      key={index}
      onPress={() => navigation.navigate('BookDetailsScreen', { book: item })}
    />
  );

  return (
    <Container testID='bookList-screen'>
      <FlatList
        data={books}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={HeaderComponent(
          headerHeight,
          imageHeight,
          imageWidth,
          searchOpacity
        )}
        ListHeaderComponentStyle={{ height: HEIGHT_MAX }}
        stickyHeaderIndices={[0]}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => loading && <Loading />}
        ListEmptyComponent={() => !books && <Loading />}
        ListFooterComponentStyle={{ marginBottom: 12 }}
      />
    </Container>
  );
};

export default BookList;
