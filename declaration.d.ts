declare module '*.svg' {
  // eslint-disable-next-line no-unused-vars
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  const content: React.FC<SvgProps>;
  export default content;
}
