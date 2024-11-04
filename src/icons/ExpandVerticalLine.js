import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgExpandVerticalLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m12 .5 4.95 4.95-1.415 1.413-2.536-2.535V10h-2V4.328L8.467 6.86 7.052 5.447zM11 14v5.67l-2.536-2.535L7.05 18.55 12 23.5l4.95-4.95-1.414-1.414L13 19.672v-5.673z" />
  </Svg>
);
export default SvgExpandVerticalLine;
