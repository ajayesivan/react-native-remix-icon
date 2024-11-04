import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgAuctionLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M14.005 20.003v2h-12v-2zM14.59.689l7.778 7.778-1.414 1.414-1.061-.353-2.475 2.475 5.657 5.657-1.414 1.414-5.657-5.657-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.414-1.415 1.132.283 6.293-6.293-.353-1.06zm.707 3.536-7.071 7.07 3.535 3.536 7.071-7.07z" />
  </Svg>
);
export default SvgAuctionLine;
