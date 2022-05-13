import { RFValue } from 'react-native-responsive-fontsize';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const marginTop = (size: number) => RFValue(size) + getStatusBarHeight();

export const marginBottom = (size: number) => RFValue(size) + getBottomSpace();
