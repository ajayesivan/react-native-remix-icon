import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFontMono = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6 4h13v2H8v6h10v2H8v7H6z" />
  </Svg>
);
export default SvgFontMono;
