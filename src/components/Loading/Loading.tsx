import React from 'react';
import { ActivityIndicator } from 'react-native';

import color from '@themes/colors';

const Loading = () => {
  return <ActivityIndicator color={color.primary} size='small' />;
};

export default Loading;
