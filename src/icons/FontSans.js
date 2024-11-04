import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFontSans = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M7 4h12v2h-9v6h8v2h-8v7H7z" />
  </Svg>
);
export default SvgFontSans;
